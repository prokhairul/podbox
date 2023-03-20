import React from 'react';
import './About.css';
import about1 from '../../images/about/about1.png';
import about2 from '../../images/about/about2.png'
import quote from '../../images/elements/quote.png'
import john from '../../images/elements/john.png'
import spotify from '../../images/elements/spotifyicon.png'
import vector4 from '../../images/elements/Vector 4.png'
import star4 from '../../images/elements/Star 4.png'
import Scribble from '../../images/about/Scribble1.png'


const About = () => {
    return (
        <div className='mx-auto'>
            <div className='scribble1'><img src={Scribble} alt="" /></div>
            <div className='h2-margin'><h2 className='md:text-[45px]'>Talk. Listen. Get inspired <br /> by every minute of it.</h2></div>

            <div className='about-main container flex justify-center gap-[315px] md:gap-[100px] mt-[100px] pb-[120px] mx-auto md:pl-[10px] md:pr-[10px]'>
                <div className='about-txt'>
                    <img className='ml-20 sm:ml-[0px] md:ml-0' src={about1} alt="" />
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Curabitur ac ultrices odio.</span>
                </div>
                <div className='about-txt'>
                    <img className='ml-20 sm:ml-[0px] md:ml-0' src={about2} alt="" />
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Curabitur ac ultrices odio.</span>
                </div>
            </div>
            <div className='container  mx-auto pr-[10px] pl-[10px]'>
                <img className='about-vector' src={vector4} alt="" />
                <img className='about-star' src={star4} alt="" />

                <div className='flex justify-center bg-[#F7EDE8] rounded-lg relative top-[-37%] h-[366px] md:w-[98%] mx-auto about-2nd'>
                    <div className='best-daily text-center items-center justify-center'>
                        <img className='pt-[40px] mx-auto' src={quote} alt="" />
                        <h2>One of the best daily podcasts that <br /> covers every topic on Spotify.</h2>
                        <div className='about-2nd-last flex items-center justify-center gap-[10px]'>
                            <img className='img-1 w-[48px] h-[48px]' src={john} alt="" /> <span className='span2 text-[14px]'>John Smith,</span>
                            <img src={spotify} alt="" /> <span className='span2 text-[14px] font-[700]'>Social Community Manager</span>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default About;