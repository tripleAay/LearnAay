import React from "react";

const Course = () => {
  const courses = [
    {
      title: "Web Development",
      count: "1 Course",
      color: "bg-purple-500",
      icon: "🌐",
    },
    {
      title: "Art & Design",
      count: "2 Courses",
      color: "bg-red-500",
      icon: "🎨",
    },
    {
      title: "Business",
      count: "3 Courses",
      color: "bg-blue-500",
      icon: "📈",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-gray-800 text-2xl font-bold mb-4">
          Explore <span className="text-yellow-500">Our Free</span> Online Courses
        </h2>
        <p className="text-gray-500 mb-8">
          Take the next step toward achieving your personal and professional goals.
        </p>

        {/* Course Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div
                className={`w-16 h-16 ${course.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}
              >
                {course.icon}
              </div>
              <h3 className="text-gray-800 text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-500 mt-2">{course.count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
