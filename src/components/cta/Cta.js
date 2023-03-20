import React from 'react';
import './Cta.css';
import google from '../../images/cta/google podcast.png';
import spotify from '../../images/cta/spotify.png';
import youtube from '../../images/cta/youtube.png';
import home from '../../images/cta/Home.png';
import play from '../../images/cta/play.png';
import smedium from '../../images/cta/Sparkle_medium.png';
import slarge from '../../images/cta/Sparkle_big.png';
import ssmall from '../../images/cta/Sparkle_small.png';
import sbtn from '../../images/cta/Sparkle_btn.png';
import Scribble from '../../images/cta/Scribble.png';


const Cta = () => {
    return (

        <div className='text-center relative mb-[100px]'>
            <div><img className='cta-show top-[-9.5%] left-[46%] md:left-[43%] absolute' src={Scribble} alt="" /></div>
            <div><img className='orna-hidden top-[56.7%] w-[373px] md:w-[200px] lg:w-[273px] md:top-[76.7%] lg:top-[68.3%] absolute' src={home} alt="" /></div>
            <div><img className='orna-hidden top-[13%] left-[80%] md:w-[200px] lg:w-[200px] md:left-[74%] md:top-[53.2%] lg:top-[53.1%] lg:left-[79.7%] w-[373px] absolute' src={play} alt="" /></div>
            <div><img className='orna-hidden top-[46%] left-[6%] md:hidden lg:hidden absolute' src={smedium} alt="" /></div>
            <div><img className='orna-hidden top-[46%] left-[0.01%] md:top-[55%] md:left-[10%] lg:left-[10%] absolute' src={slarge} alt="" /></div>
            <div><img className='orna-hidden top-[43%] left-[5%] md:hidden lg:hidden absolute' src={ssmall} alt="" /></div>
            <div><img className='orna-hidden top-[56%] left-[53%] md:left-[57%] lg:left-[57%] absolute' src={sbtn} alt="" /></div>

            <div className='cta-m pt-[143px] mb-[140px]'>
                <span className='border-[1px] border-[#CD4631] py-[3px] px-[6px] rounded-md font-[700] text-[14px] text-[#CD4631]'>BETA</span>
                <h2 className='cta-title mt-[23px] mb-[28px] text-[59.3px] font-[700] leading-[120%] tracking-[-0.02em]'>Available now <br /> Pod of Cast App</h2>
                <p className='cta-subtitle font-[500] text-[22.65px] leading-[160%] text-[#4D4D4D]'>We just launched our podcast app!</p>
            </div>
            <div>
                <div className='flex justify-center pb-[24px]'>
                    <a href="https://khairulislam.com/" target='_blank' rel='noreferrer'><button className='cta-btn'>DOWNLOAD NOW</button></a>
                </div>
                <p>Content also available on:</p>
                <div className='cta-btn-m flex gap-[20px] justify-center items-center pb-[140px] mt-[10px] cta-content'>
                    <a href="https://podcasts.google.com/" target='_blank' rel='noreferrer'> <img src={google} alt="" /> </a>
                    <a href="https://www.spotify.com" target='_blank' rel='noreferrer'> <img src={spotify} alt="" /> </a>
                    <a href="https:/www.youtube.com" target='_blank' rel='noreferrer'> <img src={youtube} alt="" /> </a>
                </div>
            </div>
        </div>
    );
};

export default Cta;