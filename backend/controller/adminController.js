const Admin = require("../models/Admin");

exports.registerAdmin = async (req, res) => {
    try {
        const newAdmin = new Admin(res.body);
        await newAdmin.save();
        res.status(200).json({ message: "User successfully registered", user: newAdmin });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.loginAdmin = async (req, res)=>{
    try {
        const {email, password} = req.body; 
        if(!email || !password){
        req.status(400).json({message: "Email and password can not remain blank"}); 
        }
        const admin = Admin.findOne({email}); 
        if(!admin){
        req.status(401).json({message: "User no found"}); 
        }
        if(admin.password !== password){
        req.status(402).json({message: "Incorrect Password"})
        }
        req.status(200).json({message: "Admin Signup Successful", admin: admin})
    } catch (error) {
        req.status(500).json(error.message);
    }
}