import { React, useState, useEffect } from "react";
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Tagbody from "../../components/Tagbody";

export default function Tag() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar></Sidebar>
        <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
        <div>
          <Tagbody></Tagbody>
        </div>
      </div>
    </div>
  )
}
