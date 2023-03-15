/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './Episodes.css';
import emiorna from '../../images/covers/Sparkle.png';
import Scribble from '../../images/testimonials/Scribble.png';

const Episodes = () => {

    const [episode, setEpisode] = useState([])

    useEffect(() => {
        fetch('episodespart.json')
            .then(res => res.json())
            .then(data => setEpisode(data))
    }, [])


    return (
        <div className='relative container mx-auto'>
            <img className='ep-orna-one top-[16%] left-[94%] absolute' src={emiorna} alt="" />
            <img className='ep-orna top-[-6.4%] left-[46%] absolute' src={Scribble} alt="" />
            <img src="" alt="" />
            
            <div className='epi-text'>
                <h2>Recent Episodes</h2>
                <p>Available on your favorite platform</p>
            </div>


            <div className='epi-card-main grid grid-cols-3 gap-[20px] mb-[100px]'>
                {episode.map((list, index) => (
                    <div key={index} className='epi-card border-2 border-[#000000] rounded-lg p-[10px]'>

                        <div className='epi-card-top flex gap-5'>
                            <div className='epi-card-img pt-[16px] pl-[16px]'>
                                <img className='max-w-none	w-[166px] h-[166px]' src={list.img} alt="" />
                            </div>
                            <div className='ep-text-inner'>
                                <h3 className='mb-[4px]'>{list.epno}</h3>
                                <a href="#"><h2 className='pb-[15px] border-b-[0.5px] border-[#4D4D4D]'>{list.title}</h2></a>
                                <p className='mt-[10px]'>{list.short}</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <div className='epi-card-bottom ml-[16px]'>
                                {list.tag.split(',').map((tag, i) => (
                                    <button key={i} className='hover:bg-[#CD4631] transition duration-150 hover:text-[#fff] text-[12px] font-medium leading-[160%] border-[1px] border-[#000000] rounded-md mt-[20px] mb-[16px] p-[6px] mr-[6px]'>{tag}</button>
                                ))}
                            </div>

                            <div className='flex justify-center items-center'>
                                <p className='text-[12px] font-bold leading-[160%] mr-[10px]'>{list.host}</p>
                                <a href="#"><img className='w-[46px] h-[26px]' src={list.himg} alt="" /></a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            <div className='flex justify-center pb-[140px]'>
                <a href="#"><button className='epi-btn'>BROWSE ALL EPISODES</button></a>
            </div>

        </div>
    );
};

export default Episodes;