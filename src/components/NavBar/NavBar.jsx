import { React, useState, useEffect } from "react";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import logo from '../../assets/img/logo.svg';
import theme from "../../flowbite-theme.js";

export default function NavBar() {
    return (
      <Navbar fluid theme={theme.navbar}
        >
        <div className="w-full p-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Navbar.Brand href="/">
                <img alt="" src={logo} className="mr-3 h-6 sm:h-8" />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  Flowbite
                </span>
              </Navbar.Brand>
            </div>
            <div className="flex items-center gap-3">
              <DarkThemeToggle />
            </div>
          </div>
        </div>
      </Navbar>
    );
  };