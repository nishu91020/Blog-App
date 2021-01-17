import React,{useState,useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import library from'../../../src/images/library.jpg';
import blogPost from '../../data/blog.json';
const BlogPost=(props)=>{

    const [post,setPost]=useState({});
    const[postid,setPostid]=useState('');
    useEffect(()=>{
        const postid=props.match.params.postid;
        const post=blogPost.data.find(post=>post.id==postid);
        setPost(post);
        setPostid(postid);
        
    },[post,props.match.params.postid]);
    return(
        <div className="blogPostContainer">
        <Card >
            <div className="blogHeader">
            <span className="category">Featured</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedby">{post.postedOn},{post.author}</span>
            </div>
            <div className="postimageContainer">
                <img src={library} alt="library"/>
            </div>
            <div className="postContainer">
                <p>{post.blogText}</p>
            </div>
        </Card>
        </div> 
    );
}
export default BlogPost;