const express = require("express"); 
const cors = require("cors"); 
const userRoute = require("./routes/userRoutes");
const bodyParse = require("body-parser");
const bodyParser = require("body-parser");
const corsOption = require("./utils/corsOption")


const app = express(); 
app.use(cors(corsOption)); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use("/auth", userRoute); 

const PORT = process.env.PORT || 5000; 

app.listen(PORT,()=>{
    console.log("app is running")
})
