import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
 

  return (
    <header className="bg-gradient-to-r from-white via-gray-50 to-white shadow-lg fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between py-5">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">LA</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">LearnAay</h1>
            <p className="text-sm text-gray-500">Empower Your Knowledge</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-6 items-center rounded-lg overflow-hidden border border-gray-300">
          <select className="bg-gray-50 px-4 py-3 text-sm text-gray-600 focus:outline-none">
            <option>All Categories</option>
            <option>Science</option>
            <option>Art</option>
            <option>Technology</option>
          </select>
          <input
            type="text"
            placeholder="Search courses, certifications..."
            className="flex-grow px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-sm">
            Search
          </button>
        </div>

        {/* User Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/signin">
          <button  className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-50 transition">
            Login
          </button>
          </Link>
          <Link to="/signup">
          <button  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
            Sign Up
          </button>
          </Link>
        </div>
      </div>

      
    </header>
  );
};

export default Header;