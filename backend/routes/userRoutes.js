const express = require("express");
const {registerUser, loginUser} = require("../controller/userController");
const hashpassword = require("../middleware/hashedPasswords");
const comparePassword = require("../middleware/comparePassword");



const router = express.Router()

router.post("./register", hashpassword, registerUser); 
router.post("./signin", comparePassword, loginUser );


module.exports = router;