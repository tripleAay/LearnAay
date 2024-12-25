import React from 'react';
import {useNavigate} from 'react-router-dom'; 


const SigninPage = () => {
    const navigate = useNavigate() 

    const handleHomeNavigate=()=>{
        navigate('/')
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 mt-8">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={handleHomeNavigate}
            aria-label="Close"
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome back
        </h2>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@email.com"
              className="block w-full mt-1 p-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="block w-full p-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                👁
              </button>
            </div>
          </div>

          <div className="text-right">
            <a
              href="#"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 text-sm font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-sm text-gray-500 text-center mt-6">
          New to our platform?{' '}
          <a href="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
