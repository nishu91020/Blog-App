import React from 'react';
import './style.css';

const Navbar=(props)=>{
    return(
        <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Posts</a></li>
            <li><a href="#">Trending</a></li>
        </ul>
        <div className="search">
        <input type="text" placeholder="Search"/>
        <img src={require('../../Assets/icons/search.png')} alt="search"/>
        </div>
        </div>
    );
}
export default Navbar;