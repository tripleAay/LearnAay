const express = require("express");
const Admin = require("../models/Admin"); 

const admin = express.Routes; 

admin.post("/register", async (res, req)=>{
    try{
        const admin = new Admin(res.body); 
        await admin.save(); 
        res.status(201).json(admin);
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

module.exports = router;


const express = require("express");
const { registerUser, getUser } = require("../controllers/userController");
const router = express.Router();

router.post("/register", registerUser);
router.get("/:id", getUser);

module.exports = router;


router.post("./admin/register", hashpassword, registerAdmin ); 
router.post("./admin/signin", comparePassword, loginAdmin );
