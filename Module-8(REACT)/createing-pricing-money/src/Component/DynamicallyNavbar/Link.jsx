import React from 'react';

const Link = ({route}) => {
    return (
        <div className='px-4 hover:bg-amber-400'>
            {
                <li className='mr-10'><a href={route.path}>{route.name}</a> </li>
            }
        </div>
    );
};

export default Link;