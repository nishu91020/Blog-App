import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import BlogPost from '../../components/BlogPost';
const Post=()=>{
    return(
        <section class ="container">
            <BlogPost/>
            <Sidebar/>

        </section>
    );
}
export default Post;