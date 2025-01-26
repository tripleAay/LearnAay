import React, { useState } from "react";
import picD from "../assets/images/picD.png";
import axios from "axios";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );
      console.log(response);
      setLoading(false);
      setSuccess("Signup successful! Welcome to LearnAay.");
      setFormData({ name: "", email: "", password: "" }); // Clear form fields
    } catch (err) {
      console.error("Error during signup:", err);
      setError(err?.response?.data?.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 mt-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section (Illustration) */}
          <div className="flex justify-center items-center">
            <img
              src={picD}
              alt="Learning Illustration"
              className="w-full max-w-lg"
            />
          </div>

          {/* Right Section (Signup Form) */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-md mx-auto bg-white p-8 shadow-md border border-gray-200"
          >
            <p className="text-xl font-bold text-gray-800 mb-6">
              Sign up and start learning with LearnAay
            </p>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="block w-full border border-gray-300 p-3 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="block w-full border border-gray-300 p-3 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="block w-full border border-gray-300 p-3 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full bg-indigo-600 text-white font-semibold py-3 px-4 shadow-sm hover:bg-indigo-700 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-sm uppercase tracking-wide ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
              aria-busy={loading}
              aria-disabled={loading}
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>

            {error && (
              <p className="text-sm text-red-600 text-center mt-4">{error}</p>
            )}
            {success && (
              <p className="text-sm text-green-600 text-center mt-4">
                {success}
              </p>
            )}

            <p className="text-sm text-gray-600 text-center mt-4">
              By signing up, you agree to our
              <a
                href="/terms"
                className="text-indigo-600 hover:underline ml-1"
              >
                Terms of Use
              </a>
              and
              <a
                href="/privacy"
                className="text-indigo-600 hover:underline ml-1"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
   
    </div>
  );
};

export default SignupPage;
