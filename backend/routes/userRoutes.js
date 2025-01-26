const express = require("express");
const {registerUser, loginUser, authLimiter} = require("../controller/userController");





const router = express.Router()

router.post("/register", registerUser); 
router.post("/signin", authLimiter, loginUser);


module.exports = router;