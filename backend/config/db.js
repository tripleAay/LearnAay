const mongoose = require("mongoose"); // Missing mongoose import
require("dotenv").config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};


module.exports = connect; 

