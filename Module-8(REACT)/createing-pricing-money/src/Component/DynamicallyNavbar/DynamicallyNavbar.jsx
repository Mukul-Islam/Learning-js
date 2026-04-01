import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const DynamicallyNavbar = () => {

    const navLinks = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        },
        {
            id: 3,
            name: "Services",
            path: "/services"
        },
        {
            id: 4,
            name: "Blog",
            path: "/blog"
        },
        {
            id: 5,
            name: "Contact",
            path: "/contact"
        }
    ];

    const links = navLinks.map(route => <Link key={route.id} route={route}></Link>)

    const [open, setOpen] = useState(false);
    return (
        <div>

            <div className='flex justify-between ml-4'>
                <span className='flex mr-4' onClick={() => setOpen(!open)}>
                    {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                    <ul className={`md:hidden 
                        bg-amber-200 py-4
                        duration-1000
                        absolute ${open ? 'top-6' : '-top-64'}`}>
                        {
                            links
                        }
                    </ul>

                    <h1>DaisyNav</h1>
                </span>
                <ul className='md:flex hidden'>
                    {
                        links
                    }
                </ul>
                <button className='btn'>Button</button>
            </div>
            {/* <ul className='flex mr-10'>
                {
                    navLinks.map(route=><li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul> */}
            {/* <ul className='flex'>
                <li className='mr-10'><a href="./Connect">Connect</a></li>
                <li className='mr-10'><a href="./Home">Home</a></li>
                <li className='mr-10'><a href="./blog">blog</a></li>
                <li className='mr-10'><a href="./About">About</a></li>
            </ul> */}
        </div>
    );
};

export default DynamicallyNavbar;