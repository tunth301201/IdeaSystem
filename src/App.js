import './App.css';
import React from 'react';
import theme from "./flowbite-theme.js";
import { Flowbite } from "flowbite-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProductPage from './pages/Product/ProductPage';
import UserPage from './pages/User/UserPage';
import IdeaPage from './pages/Idea/IdeaPage';

export default function App() {
  return (
    <Flowbite theme={{ theme }}>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" index element={<DashboardPage />}/>
          <Route path="/tags" element={<ProductPage />} />
          <Route path="/users/list" element={<UserPage />} />
          <Route path="/ideas" element={<IdeaPage />} />
      
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}
