import React from "react";

const CourseTile = () => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-32 object-cover"
        src="https://via.placeholder.com/400x300" // Replace with your image URL
        alt="Course Thumbnail"
      />

      {/* Content */}
      <div className="p-3">
        {/* Brand */}
        <div className="flex items-center space-x-2">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">LA</span>
          </div>
          <span className="text-gray-700 font-semibold text-sm">LearnAay</span>
        </div>

        {/* Title */}
        <h2 className="mt-2 text-xl font-bold text-gray-800 text-left">
          Master Modern Web Design
        </h2>

        {/* Description */}
        <p className="mt-1 text-gray-600 text-sm">
          Learn how to create stunning and responsive user interfaces with modern
          design principles.
        </p>

        {/* Price */}
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">$49.99</span>
          <button className="px-3 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseTile;
