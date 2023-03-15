/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './Sponsor.css';
import Scribble from '../../images/testimonials/Scribble.png';
import Sparkel from '../../images/elements/Sparkle.png';
import star from '../../images/plan/Star 4.png';
import vector from '../../images/plan/Vector 4.png'

const Sponsor = () => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        fetch('plan.json')
            .then(res => res.json())
            .then(data => setMembers(data))

    }, [])


    return (
        <div className='relative'>
            <div><img className='orna-show top-[-20.5%] left-[46%] absolute' src={Scribble} alt="" /></div>
            <div className='orna-hidden top-[-7%] left-[30%] absolute'> <img src={Sparkel} alt="" /> </div>
            <div><img className='orna-hidden top-[15%] left-[86.5%] absolute z-[-1]' src={star} alt="" /></div>
            <div><img className='orna-hidden top-[79%] left-[6%] absolute z-[-1]' src={vector} alt="" /></div>

            <div className='container mx-auto'>
                <div className='memberh2 text-center mt-[140px]'>
                    <h2 className=''>Become our sponsor</h2>
                    <p className=''>Get exclusive episodes, merch and more</p>
                </div>

                <div className='sponsor-main grid grid-cols-3 gap-[20px]'>
                    {members.map((item, i) => (
                        <div key={i} className='sp-mar-control mb-[140px]'>
                            <div className='border-2 border-[#000000] rounded-lg bg-white'>
                                <div className='flex items-center'>
                                    <h2 className='p-left font-[700] text-[36.65px] leading-[140%] tracking-[-0.02em] pt-[60px] pl-[40px] pr-[40px] z-40'>{item.short_name}</h2>
                                    {item.popo && <p className='py-[3px] px-[6px] bg-[#CD4631] border-[1px] border-[#CD4631] rounded-[4px] font-[700] text-[12px] leading-[160%] text-[#fff] mt-[60px]'>MOST POPULAR</p>}
                                </div>

                                <p className='p-left text-[#4D4D4D] pt-[20px] pl-[40px] pr-[50px] text-[14px] leading-[160%] font-[500]'>{item.description}</p>
                                <div className='sp-inner-m flex items-center justify-between mt-[90px] pl-[40px] pr-[40px] '>
                                    <a href="#"><button className='sponsor-btn mb-[30px] '>Subscribe</button></a>
                                    <p className='text-[22.65px] font-bold text-red-500'>${item.price} <br /> <p className='mb-[10px] text-[14px] text-[#000000]'>/month</p></p>
                                </div>
                            </div>

                            <div className='w-[100%] h-[312px] border-2 border-[#000000] rounded-lg mt-4 bg-white'>
                                <h2 className='font-[700] text-[14px] leading-[160%] text-[#4D4D4D] pt-[60px] pl-[40px] pr-[40px]'>What's included:</h2>
                                <ul className='list-disc text-[16px] leading-[200%] pt-[20px] pl-[40px] pr-[40px]'>
                                    {item.whatsInclude.map((listItem, i) => (
                                        <li key={i} className={`${listItem.bold && 'font-bold'}`}>{listItem?.text}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Sponsor;