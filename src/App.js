import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Signup/Signup";
import Createidea from './pages/CreateIdea/Createidea';
import Tag from './pages/Tag/Tag';
import Profile from './pages/Profile/Profile';
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import MainLayout from "./pages/MainLayout/MainLayout";
import Viewidea from "./pages/ViewIdea/Viewidea";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<LoginSignup />}>
            <Route index path="/" element={<Login />}/>
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route index path="/home" element={<Home></Home>}></Route>
            <Route path="/createidea" element={<Createidea></Createidea>}></Route>
            <Route path="/tag" element={<Tag></Tag>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/viewidea" element={<Viewidea></Viewidea>}></Route>  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
