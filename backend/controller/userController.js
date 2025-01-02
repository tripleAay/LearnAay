const User = require("../models/User"); 

exports.registerUser = async (req, res) => {
    try {
        const newUser = new User(res.body); 
    await newUser(); 
    res.status(200).json(newUser)
    } catch (error) {
    res.status(500).json({message: error.message})
    }
}; 

exports.loginUser = async (req, res) => {
    try {
        const {email, password } = req.body;
        if(!email || !password){
            req.status(400).json({
                message: "User should enter email and password"
            })
        }
        
        const user = await User.findOne({email}); 
        if(!user){
            req.status(401).json({message: "user not found"});
        }
        if(user.password !== password){
            req.status(402).json({
                message: "Invalid Email"
            })
        }
        req.status(201).json({message:"Login Successful"})
        
    } catch (error) {
        req.status(500).json({message: error.message})
    }
};