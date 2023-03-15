/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './Footer.css';
import logo from '../../logo.png';
import google from '../../images/footer/Google Podcast.png';
import spotify from '../../images/footer/Spotify.png';
import youtube from '../../images/footer/Youtube.png';
import play from '../../images/footer/google_play.png';
import appstore from '../../images/footer/app_store.png'
import { BsFillArrowUpCircleFill } from "react-icons/bs";


const Footer = () => {

    const [showScroll, setShowScroll] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='container mx-auto relative'>
            <button
                className={`scroll-top-button ${showScroll ? "show" : "hide"}`}
                onClick={handleClick}
            >
               <BsFillArrowUpCircleFill size='30px'/>
            </button>

            <div className='grid-main grid grid-cols-3 mb-[137px]'>
                <div>
                    <div className='logo-n--txt flex items-center mb-[20px]'><img className='w-74px h-[74px]' src={logo} alt="" /> <span className='font-[500] text-[12px] leading-[160%] text-[#4D4D4D] mt-[30px]'> &copy; 2021</span></div>
                    <p className='mb-[40px] font-[500] text-[14px] leading-[160%] text-[#4D4D4D]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>

                    <div className='icon-style flex gap-[24px]'>
                        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                        <a href="#"><ion-icon name="logo-tiktok"></ion-icon></a>
                    </div>
                </div>

                <div className='footer-menu'>
                    <ul>
                        <li> <a href="#"> About </a> </li>
                        <li> <a href="#">Testimonial</a></li>
                        <li> <a href="#">Features</a></li>
                        <li> <a href="#">Episodes</a></li>
                        <li> <a href="#">Pricing</a></li>
                        <li> <a href="#">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-[500] text-[16px] leading-[160%] text-[#4D4D4D] mb-[29px]'>Listen to episodes on your fav platform:</p>
                    <div className='flex gap-[38.5px] mb-[60px] eip-img'>
                        <a href="#"><img className='w-[122] h-[22px]' src={google} alt="" /></a>
                        <a href="#"><img className='w-[80px] h-[22px]' src={spotify} alt="" /></a>
                        <a href="#"><img className='w-[94px] h-[22px]' src={youtube} alt="" /></a>
                    </div>
                    <div>
                        <h4 className='font-[500] text-[16px] leading-[160%] text-[#4D4D4D]'>App available on:</h4>

                        <div className='app-icon flex gap-5 mt-[20px]'>
                            <a href="#"><img src={play} alt="" /></a>
                            <a href="#"><img src={appstore} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="w-[100%] h-[1px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

            <div className='flex justify-between mt-[20px]'>
                <div>
                    <p className='font-[500] text-[12px] leading-[160%] text-[#4D4D4D]'>&copy; 2023. All Rights Reserved. <span className='text-[#CD4631]'> <a href="#">PodBox</a></span></p>
                </div>

                <div className='footer-bt-menu mb-[80px]'>
                    <ul className='flex gap-[10px] items-center'>
                        <li> <a href='#'>Terms</a> </li> <span className=''>•</span>
                        <li> <a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;