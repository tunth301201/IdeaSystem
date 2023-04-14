import { React, useState, useEffect} from 'react';
import jwtDecode from 'jwt-decode';

export const decodeJwt = () =>{
    const token = localStorage.getItem("Authentication");
    if (token) {    
        try {
            const decoded = jwtDecode(token)
            const id = decoded.data._id;
            const permission = decoded.data.permission;
            return {id, permission}
        } catch (err) {
            console.log(err)
        }
    }
}