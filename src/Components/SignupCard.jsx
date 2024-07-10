import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
// import { BiHandicap } from 'react-icons/bi';
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import API from "../../env"


function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    password: "",
    agreed : false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userDetails.agreed) {
      toast.error("You must agree to the terms and privacy policy");
      return;
    }
    try {
      const response = await axios.post(`${API}/user/signup`, userDetails);
      if (response.status === 200) {
        toast.success("Registration Successful!");
      } else {
        toast.error("Registration failed! Please try again.");
      }
    } catch (error) {
      console.error("Error in registration:", error);
      toast.error("Registration failed! Please try again.");
    }
  };


  return (
    <div className="p-10 bg-white rounded-lg font-be-vietnam-pro ">
      <h2 className="text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-blackH  text-center">Sign Up</h2>
      <p className="text-[14px] md:text-[16px] xl:text-[18px] text-blackPara mb-6 text-center">
        Create an account to unlock exclusive features.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Full Name</label>
          <input
            type="name"
            name="fullName"
            className="w-full px-4 py-4 mt-2 border-2 rounded-md outline-none border-grayColor text-blackPara hover:border-grayH hover:border-2"
            placeholder="Enter your Name"
            value={userDetails.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-4 mt-2 border-2 rounded-md outline-none border-grayColor text-blackPara hover:border-grayH hover:border-2"
            placeholder="Enter your Email"
            value={userDetails.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              className="w-full px-4 py-4 mt-2 border-2 rounded-md outline-none border-grayColor text-blackPara hover:border-grayH hover:border-2"
              placeholder="Enter your Password"
              value={userDetails.password}
              onChange={handleInputChange}
              required
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-5 font-medium cursor-pointer text-blackH"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
            </span>
          </div>
        </div>
        <div className="flex items-center py-3 mb-4">
          <input type="checkbox" name='agreed' id="agree" checked={userDetails.agreed}
            onChange={handleInputChange}
            required
            className="w-5 h-5 mr-2 cursor-pointer" />
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
          className="w-8 h-8 mr-2"
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
