const Course = require("../models/Course");


// add new courses
exports.addCourse = async (req, res) => {
    try {
        const newCourse = new Course.json(res.body);
        await newCourse.save();
        res.status(200).json({ message: "Course Added Successfully" })
    } catch (error) {
        res.status(500).json(error.message)
    }
};


// get all courses
exports.getallCourses = async (req, res) => {
    try {
        const getregCourses = await Course.find().populate("instructor", "name email");
        res.status(201).json({
            status: true,
            count: getregCourses.length,
            data: getregCourses
        })
    } catch (error) {
        res.status(501).json({
            status: false, message: error.message
        })
    }
};

// find a course
exports.findaCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const find1Course = Course.findById(id).populate("instructor", "name email");
        if (!find1Course) {
            req.status(502).json({
                status: false,
                message: "course not found",
            })
        }
        res.status(202).json({
            status: true,
            message: "Course Found",
            data: find1Course,
        })
    } catch (error) {
            req.status(505).json(error.message);
    }

}; 

exports.updateCourse = async (req, res) => {
    try {
         const {id} = req.params;
         const modifyCourse = await Course.findByIdAndUpdate(id, req.body, {
            new: true, 
            newValidators: true, 
         }); 
         if(!modifyCourse){
            req.status(506).json({message: "Course not found"})
         }
         req.status(230).json({
            status: true,
            data: modifyCourse,
            message: "Course Successfully Deleted"
         })

        
    } catch (error) {
        req.status(510).json({message: error.message})
    }
}; 

exports.removeCourse = async(req, res)=>{
    try{
        const {id} = req.params
        const deleteCourse = findByIdAndDelete(id, req.body,{
            new: true, 
            newValidators: true,
        })

        if(!deleteCourse){
            req.status(520).json({
             message: "Course not found",  
             status: false,
            })
        }
        req.status(234).json({
            message: "Course successfully deleted", 
            data: deleteCourse 
        })
    } catch (error){
        req.status(515).json({
            message: error.message 
        })
    }
};
