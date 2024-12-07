import React from "react";
import { useAuth } from "../context/AuthContext";
import { FaUserAlt, FaEnvelope, FaUserEdit } from "react-icons/fa";

const ProfilePage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 via-gray-800 to-black text-white px-4 py-8">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="flex items-center mb-6">
          <FaUserAlt className="text-4xl mr-4" />
          <div>
            <p className="text-xl font-semibold">Name: {user?.name || "N/A"}</p>
            <p className="text-gray-400">Email: {user?.email || "N/A"}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          {/* <button className="flex items-center bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition-all">
            <FaUserEdit className="mr-2" />
            Edit Profile
          </button> */}
          {/* <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all">Logout</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
