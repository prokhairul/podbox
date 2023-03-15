import React from 'react';
import './Hero.css';
import hroimg1 from '../../images/elements/hero-left.png';
import hroimg2 from '../../images/elements/hero-right.png'

const Hero = () => {
    return (
        <div>
            <div className='heroimg1 '><img  src={hroimg1} alt="" /></div>
            <div className='heroimg2'><img  src={hroimg2} alt="" /></div>

            <div className='hero-middle'>
                <h2>Your Daily</h2>
                <h3 className='text-[#CD4631] text-[48px]'>Podcast</h3>
                <p>
                    We cover all kinds of categories and <br /> a weekly special guest.
                </p>
                <button className='hero-btn'>SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default Hero;