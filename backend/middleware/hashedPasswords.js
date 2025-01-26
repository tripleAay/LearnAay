// const bcrypt = require("bcrypt");

// const hashpassword = async (req, res, next)=> {
//     try {
//         if(req.body.password){
//             const salt = await bcrypt.genSalt(10); 
//             req.body.password = await bcrypt.hash(req.body.password, salt);
//         }
//         next();
//     } catch (error) {
//         req.status(500).json({message: error.message})
//     }
// }; 

// module.exports = hashpassword; 

    
