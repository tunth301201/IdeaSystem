import { React, useState, useEffect } from "react";
import Navbar from "../../components/Home/Navbar";
import Asidebar from "../../components/Home/Asidebar";
import Body from "../../components/Home/Body";
import Footer from './../../components/Home/Footer';

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Asidebar></Asidebar>
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
