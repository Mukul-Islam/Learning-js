import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between p-4 border-gray-400 '>
            <div>
                {/* name */}
                <h1>Daisy</h1>
            </div>
            <div className='flex justify-between gap-4 '>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Section</h1>
                <h1>Number</h1>
                <h1>List</h1>
                {/* middle */}
            </div>
            <div>
                <button className='btn'>Button</button>
                {/* button */}
            </div>
        </div>
    );
};

export default Navbar;