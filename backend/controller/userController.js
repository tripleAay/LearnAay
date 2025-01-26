const bcrypt = require("bcrypt");
const User = require("../models/User");
const validator = require("validator");
const rateLimit = require("express-rate-limit");

// Rate limiting configuration
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts
    message: {
        status: false,
        message: "Too many attempts. Please try again later."
    }
});

// Password validation
const isPasswordStrong = (password) => {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /[0-9]/.test(password) && 
           /[^A-Za-z0-9]/.test(password);
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Enhanced input validation
        if (!name || !email || !password) {
            return res.status(400).json({
                status: false,
                message: "All fields are required"
            });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                status: false,
                message: "Invalid email format"
            });
        }

        // Validate password strength
        if (!isPasswordStrong(password)) {
            return res.status(400).json({
                status: false,
                message: "Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character"
            });
        }

        // Sanitize input
        const sanitizedName = validator.escape(name.trim());
        const sanitizedEmail = validator.normalizeEmail(email.toLowerCase());

        // Check if user exists (case-insensitive)
        const existingUser = await User.findOne({ 
            email: sanitizedEmail 
        });

        if (existingUser) {
            return res.status(409).json({
                status: false,
                message: "Email already registered"
            });
        }

        // Hash password with increased work factor
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create new user
        const newUser = new User({
            name: sanitizedName,
            email: sanitizedEmail,
            password: hashedPassword,
            loginAttempts: 0,
            lastLoginAttempt: null
        });

        await newUser.save();

        // Remove sensitive data from response
        const userResponse = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        };

        return res.status(201).json({
            status: true,
            message: "Registration successful",
            user: userResponse
        });

    } catch (error) {
        console.error('Registration error:', error);
        
        if (error.code === 11000) {
            return res.status(409).json({
                status: false,
                message: "Email already registered"
            });
        }

        return res.status(500).json({
            status: false,
            message: "An error occurred during registration"
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: "Email and password are required"
            });
        }

        const sanitizedEmail = validator.normalizeEmail(email.toLowerCase());

        const user = await User.findOne({ email: sanitizedEmail });

        // Increment login attempts
        if (user) {
            user.loginAttempts += 1;
            user.lastLoginAttempt = new Date();
            await user.save();

            // Lock account after 5 failed attempts
            if (user.loginAttempts >= 5) {
                const lockoutDuration = 15 * 60 * 1000; // 15 minutes
                const timeSinceLastAttempt = Date.now() - user.lastLoginAttempt;
                
                if (timeSinceLastAttempt < lockoutDuration) {
                    return res.status(429).json({
                        status: false,
                        message: "Account temporarily locked. Please try again later."
                    });
                } else {
                    // Reset attempts after lockout period
                    user.loginAttempts = 0;
                    await user.save();
                }
            }
        }

        // Verify credentials
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                status: false,
                message: "Invalid credentials"
            });
        }

        // Reset login attempts on successful login
        user.loginAttempts = 0;
        user.lastLoginAttempt = null;
        await user.save();

        // Remove sensitive data from response
        const userResponse = {
            id: user._id,
            name: user.name,
            email: user.email
        };

        return res.status(200).json({
            status: true,
            message: "Login successful",
            user: userResponse
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            status: false,
            message: "An error occurred during login"
        });
    }
};

module.exports = { registerUser, loginUser, authLimiter };