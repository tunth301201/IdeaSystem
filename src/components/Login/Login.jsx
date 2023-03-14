import { React, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

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
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">
          <Link to="/home">Login</Link>
        </button>
        <div>
          Don't have an account?
          <a id="submit">
            <Link to="/signup">Sign Up</Link>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
