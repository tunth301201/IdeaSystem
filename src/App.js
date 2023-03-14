import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import SignUp from "./components/Signup/Signup";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/home" element={<Layout></Layout>}>
            <Route index path="/home" element={<Home></Home>} />
          </Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
