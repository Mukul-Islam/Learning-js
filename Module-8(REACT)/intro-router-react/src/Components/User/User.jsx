import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name,email,phone} = user;
    const style = {
        border:'2px solid red',
        padding:'20px',
        margin:'4px'
    }
    return (

        <div style={style}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p><small>{phone}</small></p>
            <Link to={`/users/${user.id}`}>DetailsUser</Link>
        </div>
    );
};

export default User;