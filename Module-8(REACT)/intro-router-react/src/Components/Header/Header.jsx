import React from 'react';
import { Link, NavLink } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div>
            <h2 className='header'>This is Header</h2>
            <nav className='header-main'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>about</NavLink>
                <NavLink to='/mobile'>Mobile</NavLink>
                <NavLink to='/about'>about</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;