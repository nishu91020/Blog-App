import React from 'react';
import './style.css';
import Sidebar from '../../components/Sidebar';
import BlogPost from '../../components/BlogPost';
const Post=(props)=>{
    console.log(props);
    return(
        <section className ="container">
            <BlogPost {...props}/>
            <Sidebar/>

        </section>
    );
}
export default Post;