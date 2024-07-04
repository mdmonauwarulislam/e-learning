import React, { useEffect, useState } from 'react';
import { decode } from 'jwt-js-decode';

function Profile() {
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    courses: [],
    purchasedCourses: [],
  });

  const handleUserDetails = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const jwtDecode = decode(token);
      setUserDetails({
        fullName: jwtDecode.payload.user.fullName,
        email: jwtDecode.payload.user.email,
        courses: jwtDecode.payload.user.courses,
        purchasedCourses: jwtDecode.payload.user.purchasedCourses,
      });
    }
  };

  useEffect(() => {
    handleUserDetails();
  }, []);

  if (!userDetails.fullName) return <div>Loading...</div>;

  return (
    <div className="pt-16 bg-gray-100 pb-4">
      <div className="max-w-[1280px] xl:mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Profile</h1>
        <p className="text-xl text-gray-700 mb-4">
          <span className="font-semibold">Full Name:</span> {userDetails.fullName}
        </p>
        <p className="text-xl text-gray-700 mb-4">
          <span className="font-semibold">Email:</span> {userDetails.email}
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Courses</h2>
        <ul className="list-disc list-inside">
          {userDetails.courses.map((course, index) => (
            <li key={index} className="text-gray-700 mb-2">{course.title}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Purchased Courses</h2>
        <ul className="list-disc list-inside">
          {userDetails.purchasedCourses.map((course, index) => (
            <li key={index} className="text-gray-700 mb-2">{course.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;
