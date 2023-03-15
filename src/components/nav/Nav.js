/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Nav.css'
import logo from '../../../src/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='py-2'>
            <div className='container mx-auto'>

                <div className='nav-main'>
                    <nav className='nav-gap flex items-center gap-[123px] ml-[-15px]'>

                        <Link to='/'><img className='h-[74px] w-[74px]' src={logo} alt="PodBox" /></Link>
                        <div className="navbar__menu" onClick={toggleNavbar}>
                            {isOpen ? <FaTimes size="1.5em" /> : <FaBars size="1.5em" />}
                        </div>
                        <ul className={isOpen ? "navbar_list active" : "navbar_list"}>
                            <li className='navbar_item'> <Link to='/episodes'> Episodes</Link> </li>
                            <li className='navbar_item'><Link to='/about'> About</Link></li>
                            <li className='navbar_item'><Link to='/articles'> Blogs</Link></li>
                            <li className='navbar_item'><Link to='/more'> More</Link></li>
                        </ul>

                    </nav>

                    <div className={isOpen ? "navbar_btn active" : "navbar_btn"}>
                        <button className='head-btn1'>RECENT EPISODES</button>
                        <button className='head-btn2'>SUBSCRIBE</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav;