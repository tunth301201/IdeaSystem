import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginImg from "../../assets/Login/login.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // hàm gửi biểu mẫu
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>
      <div className="bg-gray-800 flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
          <h2 className="text-4xl dark:text-white font-bold text-center">Login</h2>
          <div className="text-left flex flex-col text-gray-400 py-2">
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsernameChange} className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"></input>
          </div>
          <div className="text-left flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"></input>
          </div>
          <button id="submit" className="md:shadow-xl w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
            <Link to="/home">Login</Link>
          </button>
          <div className="text-white">
            Don't have an account?
            <button id="submit" className="text-green-500 ">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
