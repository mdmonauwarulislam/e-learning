/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";


function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white p-10 rounded-lg">
      <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
      <p className="text-gray-600 mb-6 text-center">Welcome back! Please log in to access your account.</p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-4 border border-gray-300 rounded-lg outline-none"
            placeholder="Enter your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-4 border border-gray-300 rounded-lg outline-none"
              placeholder="Enter your Password"
            />
            <span
              className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>
          <div className="text-right">
            <Link href="#" className="text-sm text-indigo-500 hover:underline">Forgot Password?</Link>
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" className="mr-2 h-5 w-5 cursor-pointer" />
          <label htmlFor="remember" className="text-gray-700">Remember Me</label>
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white rounded-lg hover:bg-orange-600 px-4 py-4"
        >
          Login
        </button>
      </form>
      <div className="my-6 text-center text-gray-500">OR</div>
      <button
        className="w-full bg-white text-gray-700 px-4 py-4 rounded-lg border border-gray-300 hover:bg-gray-100 outline-none flex items-center justify-center"
      >
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2 " />
        Login with Google
      </button>
      <p className="mt-6 text-center text-gray-700">
        Don't have an account?
        <Link to = "/signup"> <span href="#" className="text-indigo-500 hover:underline">Sign Up</span>
        </Link>
      </p>
    </div>
  );
}

export default LoginCard;
