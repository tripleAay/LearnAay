const mongoose = require("mongoose"); 

const courseSchema = new mongoose.Schema({
    title:{
        type: String, 
        required: [true, "Enter Title for Course"], 
        trim: true,
    }, 
    Description:{
        type: String, 
        required: [true, "Description of Course Required"], 

    }, 
    price:{
        type: Number, 
        required: [true, "Price is required"], 
        min: [0, "Price can not be empty"],
    }, 
    category:{
    type: String, 
    enum: ["Science", "Technology", "Art"], 
    required: true,
    }, 
    instructor:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Admin",
        required: true,
    }, 
    video:{
        type: String, 
        required: true, 
        trim: true,
    }
}, {timestamps: true}); 

module.exports = mongoose.model("Course", courseSchema); 