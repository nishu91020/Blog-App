import React, { useState } from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';
import searchicon from '../../Assets/icons/search.png';
const Navbar=(props)=>{

    const[search,setSearch]=useState(false);
    const submitSearch=(e)=>{
        e.preventDefault();
        alert('Searched');
    }
    const openSearch=()=>{
        setSearch(true);
    }
    const searchClass=search?'searchinput active':'searchinput';
    return(
        <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us">About us</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="Post">Posts</NavLink></li>
        </ul>
        <div className="search">
        <form onSubmit={submitSearch}>
        <input type="text" className={searchClass} placeholder="Search"/>
        <img onClick={openSearch} className="searchicon" alt="search" src={searchicon} />
        </form>
        </div>
        </div>
    );
}
export default Navbar;