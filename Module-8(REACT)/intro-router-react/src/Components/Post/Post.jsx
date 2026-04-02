import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {userid,body} = post;
    const naviGate = useNavigate();

    const navGate=()=>{
        naviGate('/')
    }

    const style = {
        border:"2px solid black",
        padding: "20px",
        margin: "10px"
    }
    return (
        <div style={style}>
            <h3>{userid}</h3>
            <h4>{body}</h4>
            <Link to={`/posts/${post.id}`}>PostDetails</Link>
            <button onClick={navGate}>details {userid}</button>
        </div>
    );
};

export default Post;