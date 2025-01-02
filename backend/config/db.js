const mongoose = require("mongoose"); 
require("dotenv").config(); 

mongoose.connect(process.env.MONGO_URL, {
    useNewURLParser: true, 
    useUnifiedTopology: true, 
}).then(()=>{
    console.log("DB is successfully connected");
}).catch((err)=>{
    console.error("message:", err)
}); 
