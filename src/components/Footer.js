import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-gray-300 py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div>
            <h2 className="text-2xl font-bold text-white">LearnAay</h2>
            <p className="mt-4 text-sm">
              Empowering learners with modern education through digital
              technologies and interactive resources.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <span className="text-xl">📍</span>
                <p className="ml-2 text-sm">AB, Street XYZ, NYC 200961, USA</p>
              </div>
              <div className="flex items-center">
                <span className="text-xl">📞</span>
                <p className="ml-2 text-sm">+123-64-5263-001</p>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-100">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Refund
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Courses Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-100">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Finance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-100">
                  Health & Fitness
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Stay updated with the latest courses and resources from LearnAay.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex justify-between items-center flex-wrap">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LearnAay. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-100">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-100">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-100">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-100">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
