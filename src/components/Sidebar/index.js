import React from 'react';
import './style.css';
import Card from '../UI/Card';

const Sidebar=()=>{
    return(
        <div className="sideBarContainer">
        <Card style={{marginBottom:'2px'}}>
            <div className="cardHeader">
                <span>About Us</span>
            </div>
        </Card>
        <Card style={{marginBottom:'2px'}}>
            <div className="cardHeader">
                <span>Social Network</span>
            </div>
        </Card>
        </div>
    );
}
export default Sidebar;