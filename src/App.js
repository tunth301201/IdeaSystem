import './App.css';
import React from 'react';
import theme from "./flowbite-theme.js";
import { Flowbite } from "flowbite-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import TagPage from './pages/Tag/TagPage';
import UserPage from './pages/User/UserPage';
import IdeaPage from './pages/Idea/IdeaPage';
import NavbarSidebarLayout from './layouts/NavBar-SideBar';
import Layout from './layouts/Layout';

export default function App() {
  return (
    <Flowbite theme={{ theme }}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<NavbarSidebarLayout />}>
            <Route path="/" index element={<DashboardPage />}/>
            <Route path="/tags" element={<TagPage />} />
            <Route path="/users/list" element={<UserPage />} />
            <Route path="/ideas" element={<IdeaPage />} />
          </Route> */}
          <Route path="/" element={<Layout />}> 
            <Route path="/" index element={<DashboardPage />}/>
            <Route path="/tags" element={<TagPage />} />
            <Route path="/users/list" element={<UserPage />} />
            <Route path="/ideas" element={<IdeaPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}
