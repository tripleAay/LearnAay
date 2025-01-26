import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const SigninPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleHomeNavigate = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value.trim() // Trim whitespace from inputs
    }));
  };

  const handleSign = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!loginData.email || !loginData.password) {
      setError("Email and password are required");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signin",
        loginData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000
        }
      );

      console.log('Login Response:', response.data);

      if (response.data.user) {
        setSuccess("Login successful! Welcome to LearnAay");
        setLoginData({ email: "", password: "" });

        // Store user data
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Redirect after successful login
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      }
    } catch (error) {
      console.error('Login Error:', error);

      if (error.code === 'ECONNREFUSED') {
        setError('Unable to connect to the server. Please try again later.');
      } else if (error.response) {
        setError(error.response.data.message || 'Login failed. Please try again.');
      } else if (error.request) {
        setError('No response from server. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#453F78] mt-8">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <div className="flex justify-end">
          <button
            onClick={handleHomeNavigate}
            aria-label="Close"
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
          >
            ✕
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome back
        </h2>

        <form onSubmit={handleSign} className="space-y-6">
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
              value={loginData.email}
              onChange={handleChange}
              placeholder="name@email.com"
              className="block w-full mt-1 p-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              required
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
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="block w-full p-3 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? "👁" : "🙈"}
              </button>
            </div>
          </div>

          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>


          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 text-sm font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>

          {error && <p className="text-sm text-red-500 mt-4">{error}</p>}
          {success && <p className="text-sm text-green-500 mt-4">{success}</p>}
        </form>

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