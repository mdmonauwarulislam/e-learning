/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function LoginCard() {
  return (
   
      <div className="bg-white p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        <p className="text-gray-600 mb-6 text-center">Welcome back! Please log in to access your account.</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4 ">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Enter your Password"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                {/* Eye icon could be placed here */}
              </span>
            </div>
            <div className="text-right">
              <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot Password?</a>
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" className="mr-2 "/>
            <label htmlFor="remember" className="text-gray-700">Remember Me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <div className="my-6 text-center text-gray-500">OR</div>
        <button
          className="w-full bg-white text-gray-700 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 focus:outline-none flex items-center justify-center"
        >
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2" />
          Login with Google
        </button>
        <p className="mt-6 text-center text-gray-700">
          Don't have an account? <a href="#" className="text-indigo-500 hover:underline">Sign Up</a>
        </p>
      </div>
  )
}

export default LoginCard