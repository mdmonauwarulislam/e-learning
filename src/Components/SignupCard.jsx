import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BiHandicap } from 'react-icons/bi';
import { Link } from "react-router-dom";
import axios from "axios";


function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/auth/signup", {
      fullName,
      email,
      password
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="bg-white p-10 rounded-lg font-be-vietnam-pro ">
      <h2 className="text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-blackH  text-center">Sign Up</h2>
      <p className="text-[14px] md:text-[16px] xl:text-[18px] text-blackPara mb-6 text-center">
        Create an account to unlock exclusive features.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Full Name</label>
          <input
            type="name"
            className="border-2 mt-2 border-grayColor rounded-md w-full py-4 px-4 outline-none text-blackPara   hover:border-grayH hover:border-2"
            placeholder="Enter your Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Email</label>
          <input
            type="email"
            className="border-2 mt-2 border-grayColor rounded-md w-full py-4 px-4 outline-none text-blackPara   hover:border-grayH hover:border-2"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border-2 mt-2 border-grayColor rounded-md w-full py-4 px-4 outline-none text-blackPara   hover:border-grayH hover:border-2"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer font-medium text-blackH"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>
        </div>
        <div className="mb-4 flex items-center py-3">
          <input type="checkbox" id="agree" className="mr-2 w-5 h-5 cursor-pointer" />
          <label htmlFor="agree" className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackH">
            I agree with <Link><span className='underline'>Terms of Use</span></Link> and <Link><span className='underline'>Privacy Policy</span></Link>
          </label>
        </div>
        <button
          type="submit"
          className="w-full text-[14px] md:text-[16px] xl:text-[18px] font-medium text-blackH bg-grayBg hover:bg-orangeBg duration-500  py-3 px-3 rounded-md hover:text-white border-2 hover:border-none border-grayColor"
        >
          Sign Up
        </button>
      </form>
      <div className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackPara text-center py-4  flex items-center gap-3"><hr className='flex-grow border-t-2 border-grayColor' /><span>OR</span><hr className='flex-grow border-t-2 border-grayColor' /></div>
      <button className="w-full text-[14px] md:text-[16px] xl:text-[18px] font-medium text-blackH bg-grayBg hover:bg-orangeBg duration-500 outline-none py-3 px-3 rounded-md hover:text-white border-2 hover:border-none border-grayColor flex items-center justify-center">
        <img
          src="https://img.icons8.com/color/16/000000/google-logo.png"
          alt="Google Logo"
          className="mr-2 h-8 w-8"
        />
        Signup with Google
      </button>
      <p className="mt-6 text-center text-[14px] md:text-[16px] xl:text-[18px] text-blackPara">
        Already have an account?{" "}
        <Link to="/Login">
          <span href="/Login" className="text-indigo-500 hover:underline">
            Login
          </span>
        </Link>
      </p>
    </div>
  );
}

export default SignupCard;
