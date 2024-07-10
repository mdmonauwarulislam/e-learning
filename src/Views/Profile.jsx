import { useEffect, useState } from 'react';
import { decode } from 'jwt-js-decode';
import { useNavigate, Link } from "react-router-dom";


function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const decodedToken = decode(token);
        if (decodedToken && decodedToken.payload && decodedToken.payload.user) {
          setUserDetails(decodedToken.payload.user);
          console.log(decodedToken.payload.user);
        } else {
          localStorage.removeItem('token');
          navigate('/profile');
        }
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    fetchUserDetails();
  }, [navigate]);

  if (!userDetails) return <div>Loading...</div>;

  return (
    <div className="pt-16 pb-4 bg-gray-100">
      <div className="max-w-[1280px] xl:mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Profile</h1>
        <p className="mb-4 text-xl text-gray-700">
          <span className="font-semibold">Full Name:</span> {userDetails.fullName}
        </p>
        <p className="mb-4 text-xl text-gray-700">
          <span className="font-semibold">Email:</span> {userDetails.email}
        </p>
        {/* <h2 className="mb-4 text-2xl font-semibold text-gray-800">My Courses</h2>
        <ul className="list-disc list-inside">
          {userDetails.courses.map((course, index) => (
            <li key={index} className="mb-2 text-gray-700">{course.title}</li>
          ))}
        </ul> */}
        {/* <h2 className="mt-6 mb-4 text-2xl font-semibold text-gray-800">Purchased Courses</h2>
        <ul className="list-disc list-inside">
          {userDetails.purchasedCourses.map((course, index) => (
            <li key={index} className="mb-2 text-gray-700">{course.title}</li>
          ))}
        </ul> */}
        {userDetails.role === 'admin' && (
          <Link to="/createcourse">
            <button className='p-3 mt-10 bg-white border-2 rounded-md border-grayColor'>Create Course</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Profile;
