import { React, useState, useEffect } from "react";
import Navbar from "../../components/Home/Navbar";
import Sidebar from "../../components/Home/Sidebar";
import Body from "../../components/Home/Body";
import Footer from './../../components/Home/Footer';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Sidebar></Sidebar>
      </div>
      <div>
        <Body></Body>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
