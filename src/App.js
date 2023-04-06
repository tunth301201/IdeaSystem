import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/Signup";
import Createidea from './pages/CreateIdea/Createidea';
import Tag from './pages/Tag/Tag';
import Profile from './pages/Profile/Profile';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/createidea" element={<Createidea></Createidea>}></Route>
          <Route path="/tag" element={<Tag></Tag>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
