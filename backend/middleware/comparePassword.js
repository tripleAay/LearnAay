const bcypt = require("bcrypt"); 



const comparePassword = async (req, res, next)=>{
    try {
        const {password, hashedPassword} = req.body; 
        if(!password || !hashedPassword){
            req.status(500).json({
                message: "Password is required",
                status: false,
            })
        }
        const isMatch = bcypt.compare(password, hashedPassword); 
        if(!isMatch){
            req.status(502).json({
            message: "Password Invalid",
            })
        }
        res.status(200).json({
            message: "Password verification successful",
        })
    } catch (error) {
        res.status(510).json({
            message: error.message
        })
    }
}

module.exports = comparePassword; 