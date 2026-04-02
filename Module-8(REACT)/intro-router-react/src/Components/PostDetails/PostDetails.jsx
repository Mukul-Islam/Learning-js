import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const {title} = useLoaderData();
    console.log(title)

    const style = {
        border:"2px solid blue",
        padding:"20px",
        margin:"10px"
    }
    return (
        <div style={style}>
            <h3>{title}</h3>
        </div>
    );
};

export default PostDetails;