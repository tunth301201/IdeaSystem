import { React, useState, useEffect } from "react";
import Navbar from "../../components/Home/Navbar";
import Sidebar from "../../components/Home/Sidebar";
import Body from "../../components/Home/Body";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar></Sidebar>
        <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
        <div>
          <Body></Body>
        </div>
      </div>
    </div>
  );
}
