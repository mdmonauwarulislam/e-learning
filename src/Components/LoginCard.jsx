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
    <div className="bg-white p-10 rounded-lg font-be-vietnam-pro">
      <h2 className="text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-blackH  text-center">Login</h2>
      <p className="text-[14px] md:text-[16px] xl:text-[16px] text-blackPara mb-6 text-center">Welcome back! Please log in to access your account.</p>
      <form>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Email</label>
          <input
            type="email"
            className="border-2 mt-2 border-grayColor rounded-md w-full py-4 px-4 outline-none text-blackPara   hover:border-grayH hover:border-2"
            placeholder="Enter your Email"
          />
        </div>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border-2 mt-2 border-grayColor rounded-md w-full py-4 px-4 outline-none text-blackPara font-normal  hover:border-grayH hover:border-2"
              placeholder="Enter your Password"
            />
            <span
              className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer font-medium text-blackH"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>
          <div className="text-right mt-2">
            <Link href="#" className="text-[14px] md:text-[16px]  xl:text-[18px] text-indigo-500 hover:underline">Forgot Password?</Link>
          </div>
        </div>
        <div className="mb-4 flex items-center py-2">
          <input type="checkbox" id="remember" className="mr-2 h-5 w-5 cursor-pointer" />
          <label htmlFor="remember" className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackH">Remember Me</label>
        </div>
        <button
          type="submit"
          className="w-full text-[14px] md:text-[16px] xl:text-[18px] font-medium text-blackH bg-grayBg hover:bg-orangeBg duration-500  py-3 px-3 rounded-md hover:text-white border-2 hover:border-none border-grayColor"
        >
          Login
        </button>
      </form>
      <div className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackPara text-center py-4  flex items-center gap-3"><hr className='flex-grow border-t-2 border-grayColor' /><span>OR</span><hr className='flex-grow border-t-2 border-grayColor' /></div>
      <button
        className="w-full text-[14px] md:text-[16px] xl:text-[18px] font-medium text-blackH bg-grayBg hover:bg-orangeBg duration-500 outline-none py-3 px-3 rounded-md hover:text-white border-2 hover:border-none border-grayColor flex items-center justify-center"
      >
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="mr-2 h-8 w-8" />
        Login with Google
      </button>
      <p className="mt-6 text-center text-[14px] md:text-[16px] xl:text-[18px] text-blackPara">
        Don't have an account?
        <Link to="/signup"> <span href="#" className="text-indigo-500 hover:underline">Sign Up</span>
        </Link>
      </p>
    </div>
  );
}

export default LoginCard;
