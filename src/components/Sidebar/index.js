import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import noddy from '../../images/noddy.jpg';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar=(props)=>{
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const posts=blogPost.data;
        setPosts(posts);
    },[posts]);

    return(
        <div className="sideBarContainer" >
        <Card style={{marginBottom:'20px',padding:'30px',boxSizing:'border-box'}}>
            <div className="cardHeader">
                <span>About Us</span>
                
            </div>
            <div>
                    <img alt="noddy" src={noddy}/>
            </div>
            <div className="cardBody">
                <p className="text">Ullamcorper morbi tincidunt ornare massa eget egestas purus. Id nibh tortor id aliquet.
                     Nisi lacus sed viverra tellus in hac. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. 
                     Tristique magna sit amet purus gravida quis blandit turpis. 
                     Cras adipiscing enim eu turpis egestas pretium aenean pharetra.</p>
            </div>
        </Card>
        <Card style={{marginBottom:'20px'}}>
            <div className="cardHeader">
                <span>Social Network</span>
            </div>
        </Card>
        <Card style={{marginBottom:'20px'}}>
            <div className="cardHeader">
                <span>Recent Post</span>
            </div>
            <div className="RecentPosts">
                {
                    posts.map(post=>{
                        return(
                            <NavLink key={post.id} to={`/post/${post.id}`}>
                            <div className="recentPost">
                            <h3>{post.blogTitle}</h3>
                            <span>{post.postedOn}</span>
                            </div>
                            </NavLink>
                        );
                    })
                }
               
            </div>
        </Card>
        </div>
    );
}
export default Sidebar;