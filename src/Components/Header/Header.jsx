import {useState} from "react";
import logo from "../../assets/Image/Logo.png";
import { Link } from "react-router-dom";
// import "../../assets/Style/style.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-grayColor pt-5">
      <div className="bg-orangeBg text-white text-center p-2 rounded mx-4">
        <p className="text-white">Free Courses 🌟 Sale Ends Soon, Get It Now</p>
      </div>
      <div className="bg-grayColor flex justify-between items-center px-4 md:px-8 lg:px-20 py-4">
        <div className="flex items-center">
          <img src={logo} alt="" className="h-10 w-10" />
          {!mobileMenuOpen && (  // Show only when mobile menu is closed
          <ul className={`flex space-x-4 ml-4 md:ml-6 nav-links hidden:flex`}>
            <Link to="/"><li className="hover:bg-orangeBg p-2 rounded hover:text-white">Home</li></Link>
            <Link to="/"><li className="hover:bg-orangeBg p-2 rounded hover:text-white">Courses</li></Link>
            <Link to="/About"><li className="hover:bg-orangeBg p-2 rounded hover:text-white">About Us</li></Link>
            <Link to="/"><li className="hover:bg-orangeBg p-2 rounded hover:text-white">Pricing</li></Link>
            <Link to="/Contact"><li className="hover:bg-orangeBg p-2 rounded hover:text-white">Contact</li></Link>
          </ul>
           )}
        </div>
        <div className={`space-x-4 font-semibold ${mobileMenuOpen ? 'hidden' : 'flex md:flex'} items-center`}>
        {!mobileMenuOpen && (  // Show only when mobile menu is closed
          <>
            <button className="bg-white hover:bg-orangeBg p-2 rounded hover:text-white">Sign Up</button>
            <button className="bg-orangeBg hover:bg-white p-2 rounded hover:text-black text-white">Login</button>
          </>
        )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 rounded bg-orangeBg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-grayColor flex flex-col items-center">
          <Link to="/"><p className="hover:bg-orangeBg p-2 rounded hover:text-white">Home</p></Link>
          <Link to="/"><p className="hover:bg-orangeBg p-2 rounded hover:text-white">Courses</p></Link>
          <Link to="/About"><p className="hover:bg-orangeBg p-2 rounded hover:text-white">About Us</p></Link>
          <Link to="/"><p className="hover:bg-orangeBg p-2 rounded hover:text-white">Pricing</p></Link>
          <Link to="/Contact"><p className="hover:bg-orangeBg p-2 rounded hover:text-white">Contact</p></Link>
        </div>
      )}
    </header>
  );
}

export default Header;