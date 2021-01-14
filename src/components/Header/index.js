import React from 'react';
import './style.css';

const Header=(props)=>{
    return(
        <header className="header">
            <nav className="headerMenu">
                <a href="#">&nbsp;Home</a>
                <a href="#">&nbsp;About Us</a>
                <a href="#">&nbsp;Contact Us</a>
            </nav>
            <div>
                social media
            </div>
        </header>

    );
}
export default Header;