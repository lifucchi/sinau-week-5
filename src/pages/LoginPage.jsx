import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);

    if (success) {
      setError("");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      {/* Title */}
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 font-bold text-center font-sans text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-8">5movies</h2>

      {/* Login Form */}
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Email
            </label>
            <input type="email" id="email" className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-teal-500" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 mb-2">
              Password
            </label>
            <input type="password" id="password" className="w-full p-2 rounded bg-gray-700 text-white focus:ring-2 focus:ring-teal-500" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white transition-transform transform hover:scale-105 hover:from-teal-500 hover:to-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
