import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsUser = () => {
    const {username,address} = useLoaderData();

    const style = {
        border:'2px solid green',
        padding:'20px',
        margin: '10px'
    }
    return (
        <div style={style}>
            <h3>{username}</h3>
            <h4>{address.street}</h4>
        </div>
    );
};

export default DetailsUser;