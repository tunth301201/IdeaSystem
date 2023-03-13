import { React, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Login from '../../components/Login/Login';
import Home from '../Home/Home';

export default function Layout(){
    return (
        <div className=''>
            <Home></Home>
        </div>
    )
}