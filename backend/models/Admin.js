const mongoose = require("mongoose"); 

const adminSchema = new mongoose.Schema({
    name:{
        type: String, 
        trim: true, 
        required: [true, "Full name is required"],
    }, 
    email:{
        type: String, 
        required: [true, "Email is required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please provide a valid email"], 
        lowercase: true, 

    }, 
    password:{
        type: String, 
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 Characters"],
    },
    permission:{
        type: [String],
        default: ["manage-users", "manage_course"]

    }
    
}, {timestamps: true});

module.exports = mongoose.model("Admin", adminSchema);