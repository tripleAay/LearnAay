const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt"); 

const userSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [true, "Full Name is Required"],
        trim: true,
    },
    email:{
        type: String,
        required: [true, "Email is Required"],
        trim: true, 
        unique: true, 
        lowercase: true, 
        match: [/\S+@\S+\.\S+/, "Please provide a valid email"],
    },
    password:{
        type: String, 
        trim: true, 
        minlength: [8, "Password must be 8 Characters"] ,
    },
    enrolledCourse:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Course",
    }, 
    role:{
        type: String,
        enum: ["User", "Admin"], 
        default: "User", 
    }
}, {timestamps: true}); 

userSchema.pre("save", async function(next) {
    
})

const user = mongoose.model("User", userSchema);
module.exports = user;