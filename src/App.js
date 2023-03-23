import './App.css';
import React from 'react';
import theme from "./flowbite-theme.js";
import { Flowbite } from "flowbite-react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';
import ProductPage from './pages/Product/ProductPage';
import UserPage from './pages/User/UserPage';

export default function App() {
  return (
    <Flowbite theme={{ theme }}>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" index element={<DashboardPage />}/>
          <Route path="/e-commerce/products" element={<ProductPage />} />
          <Route path="/users/list" element={<UserPage />} />
      
        </Routes>
      </BrowserRouter>
    </Flowbite>
  );
}
