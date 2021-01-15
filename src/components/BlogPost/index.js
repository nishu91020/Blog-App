import React from 'react';
import './style.css';
import Card from '../UI/Card';
const BlogPost=()=>{
    return(
        <div className="blogPostContainer">
        <Card >
            <div className="blogHeader">
            <span className="category">Featured</span>
            <h1 className="postTitle">Work life balance</h1>
            <span className="postedby">19 January 2020,19:30pm</span>
            <div className="postimageContainer">
                <img src={require('../../images/library.jpg')} alt="library"/>
            </div>
            </div>
        </Card>
        </div> 
    );
}
export default BlogPost;