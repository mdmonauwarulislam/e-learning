/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../env"
function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    agreed: false,
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/user/login`, userData);
      if (response.status === 200) {
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        console.log("Login successful:", response.data);
        toast.success("Login Successfully!");
        setUserData({
          email: "",
          password: "",
          agreed: false,
        });
        navigate('/profile');
      }
    } catch (error) {
      toast.error("Login Failed!");
      console.log("Failed to log in:", error);
    }
  };

  const handleForgotPassword = async () => {
    if (!userData.email) {
      toast.error("Please enter your email address.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/forgot-password", { email: userData.email });
      if (response.status === 200) {
        toast.success("Password reset link sent to your email!");
      } else {
        toast.error("Failed to send password reset link.");
      }
    } catch (error) {
      toast.error("Error sending password reset link.");
      console.log("Error in forgot password:", error);
    }
  };

  return (
    <div className="p-10 bg-white rounded-lg font-be-vietnam-pro">
      <h2 className="text-[28px] md:text-[38px] xl:text-[48px] font-semibold text-blackH text-center">Login</h2>
      <p className="text-[14px] md:text-[16px] xl:text-[16px] text-blackPara mb-6 text-center">
        Welcome back! Please log in to access your account.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-4 mt-2 border-2 rounded-md outline-none border-grayColor text-blackPara hover:border-grayH hover:border-2"
            placeholder="Enter your Email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4 text-[14px] md:text-[16px] xl:text-[18px]">
          <label className="font-medium text-blackH">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full px-4 py-4 mt-2 font-normal border-2 rounded-md outline-none border-grayColor text-blackPara hover:border-grayH hover:border-2"
              placeholder="Enter your Password"
              value={userData.password}
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
          <div className="mt-2 text-right">
            <button type="button" onClick={handleForgotPassword} className="text-[14px] md:text-[16px] xl:text-[18px] text-indigo-500 hover:underline">
              Forgot Password?
            </button>
          </div>
        </div>
        <div className="flex items-center py-2 mb-4">
          <input
            type="checkbox"
            id="remember"
            name="agreed"
            checked={userData.agreed}
            onChange={handleInputChange}
            className="w-5 h-5 mr-2 cursor-pointer"
          />
          <label htmlFor="remember" className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackH">
            Remember Me
          </label>
        </div>
        <button
          type="submit"
          className="w-full text-[14px] md:text-[16px] xl:text-[18px] font-medium text-blackH bg-grayBg hover:bg-orangeBg duration-500 py-3 px-3 rounded-md hover:text-white border-2 hover:border-none border-grayColor"
        >
          Login
        </button>
      </form>
      <div className="text-[14px] md:text-[16px] xl:text-[18px] font-normal text-blackPara text-center py-4 flex items-center gap-3">
        <hr className='flex-grow border-t-2 border-grayColor' />
        <span>OR</span>
        <hr className='flex-grow border-t-2 border-grayColor' />
      </div>
      <button
        className="w-full text-[14px] md:text-[16px] xl:text-[18px] font-medium text-blackH bg-grayBg hover:bg-orangeBg duration-500 outline-none py-3 px-3 rounded-md hover:text-white border-2 hover:border-none border-grayColor flex items-center justify-center"
      >
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" className="w-8 h-8 mr-2" />
        Login with Google
      </button>
      <p className="mt-6 text-center text-[14px] md:text-[16px] xl:text-[18px] text-blackPara">
        Don't have an account?
        <Link to="/signup">
          <span className="text-indigo-500 hover:underline">Sign Up</span>
        </Link>
      </p>
    </div>
  );
}

export default LoginCard;
