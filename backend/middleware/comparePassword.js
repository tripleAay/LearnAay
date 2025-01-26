// const bcrypt = require("bcrypt");
// // Note: Make sure this import is correct and the file exists
// const hashedPassword = require("./hashedPasswords");

// const comparePassword = async (req, res, next) => {
//     try {
//         const {password, hashedpassword} = req.body;
        
//         // Add return statements to prevent multiple responses
//         if (!password || !hashedpassword) {
//             return res.status(500).json({
//                 message: "Password is required",
//                 status: false,
//             });
//         }

//         const isMatch = await bcrypt.compare(password, hashedpassword);
        
//         if (!isMatch) {
//             return res.status(502).json({
//                 message: "Password Invalid",
//             });
//         }

//         // Add return here too
//         return res.status(200).json({
//             message: "Password verification successful",
//         });

//     } catch (error) {
//         // And here
//         return res.status(510).json({
//             message: error.message
//         });
//     }
// }

// module.exports = comparePassword;