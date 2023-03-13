import { React, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './login.css';

export default function Login(){
    return (
        <div>
           <h1>Login page</h1>
           <button><Link to='/home'>Login</Link></button>
        </div>
    )
}