/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './EpisodePage.css';
import Cover from '../../images/covers/cover.png'
import { MdPlayArrow } from "react-icons/md";
import avatar from '../../images/elements/avatarsingle.png';
import fakeData from '../../fakeData/episodesall.json';
import hroimg1 from '../../images/elements/hero-left.png';
import hroimg2 from '../../images/elements/hero-right.png';

const EpisodeMain = () => {

    const [allepisode] = useState(fakeData)
    const [filterData, setFilterData] = useState([])
    const [filterStatus, setFilters] = useState(true)

    useEffect(() => {
        scrollUp()
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
        })
    }
    
    const handleType = (btnType) => {
        if (btnType === 'All') {
            setFilters(true)
        } else {
            setFilters(false)
        }
        const content = allepisode.filter(episode => episode.type === btnType)
        setFilterData(content)
    }


    if (filterStatus) {
        return (
            <div>
                <div className='bg-[#F7EDE8]'>

                    <div className='epiallimg1'><img src={hroimg1} alt="" /></div>
                    <div className='epiallimg2'><img src={hroimg2} alt="" /></div>

                    <section className='epi-hero-main container mx-auto pt-[100px] pb-[50px]'>
                        <div className='epi-hero flex justify-between'>
                            <div className='epiall-img-part'>
                                <img src={Cover} alt="" />
                                <p>Tags: <button className='hover:bg-[#CD4631] hover:text-[#fff] transition border-[1px] border-black rounded-md p-[6px] ml-[60px] mr-[6px]'> <a href="#">mind-behavior</a></button> <button className='hover:bg-[#CD4631] hover:text-[#fff] transition border-[1px] border-black rounded-md p-[6px]'> <a href="#">health</a></button> </p>
                            </div>
                            <div className='epi-all-main-text'>
                                <div className='epi-all-epi-no flex justify-between items-center'>
                                    <h3>Episode 1</h3>
                                    <h4>Featured Episode</h4>
                                </div>
                                <h2>Are you a Perplexed Mind Person?</h2>

                                <hr className="w-[100%] h-[1px] mb-[20px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod <p></p> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <p></p> veniam, quis nostrud.</p>
                                <div className='epi-all-hero-right flex items-center'>
                                    <div className='flex justify-center items-center gap-[10px]'>
                                        <img src={avatar} alt="" />
                                        <span> <strong className='font-[500] text-[#4D4D4D] text-[14px]'> Hosted by: </strong> <strong className='text-[#CD4631] font-[700] text-[14px]'> <a href="#">Jone Doe</a></strong></span>
                                    </div>
                                    <div className='epi-date-txt'>
                                        <p className=''>Sep 22, 2023</p>
                                    </div>
                                </div>

                                <div className='epiall-btn flex items-center gap-[20px]'>
                                    <button className='a-page-btn-two'> <a href="#">SUBSCRIBE</a></button>
                                    <button className='epi-page-btn flex items-center justify-center gap-[10px]'> <MdPlayArrow size='24px' /> <a href="#">LISTEN NOW</a>( 44 Minute )</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className='epi-latest-main container mx-auto mt-[100px] '>
                    <div className='epi-text'>
                        <h2>Latest Episode</h2>
                    </div>

                    <div className='filter-btn flex justify-center item-center mb-[20px] pt-[100px]'>
                        <ul>
                            <li onClick={() => handleType('all')}>All</li>
                            <li onClick={() => handleType('Business')}>Business</li>
                            <li onClick={() => handleType('Comedy')}>Comedy</li>
                            <li onClick={() => handleType('Education')}>Education</li>
                            <li onClick={() => handleType('Health')}>Heath</li>
                            <li onClick={() => handleType('News')}>News</li>
                            <li onClick={() => handleType('Tech')}>Tech</li>
                        </ul>
                    </div>
                    <hr className="w-[100%] h-[1.5px] mb-[20px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                    <div className='epi-card-main grid grid-cols-2 gap-[20px] mb-[150px] mt-[100px]'>

                        {
                        allepisode?.map((list, index) => (
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
                                            <button key={i} className='hover:bg-[#CD4631] transition duration-150 hover:text-[#fff] text-[12px] font-medium leading-[160%] border-[1px] border-[#000000] rounded-md mt-[20px] mb-[16px] p-[6px] mr-[6px]'> <a href="#"> {tag} </a></button>
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
                </section>
            </div>
        );
    }

    return (
        <div>
            <div className='bg-[#F7EDE8]'>

                <div className='epiallimg1'><img src={hroimg1} alt="" /></div>
                <div className='epiallimg2'><img src={hroimg2} alt="" /></div>

                <section className='epi-hero-main container mx-auto pt-[100px] pb-[50px]'>
                    <div className='epi-hero flex justify-between'>
                        <div className='epiall-img-part'>
                            <img src={Cover} alt="" />
                            <p>Tags: <button className='hover:bg-[#CD4631] hover:text-[#fff] transition border-[1px] border-black rounded-md p-[6px] ml-[60px] mr-[6px]'> <a href="#">mind-behavior</a></button> <button className='hover:bg-[#CD4631] hover:text-[#fff] transition border-[1px] border-black rounded-md p-[6px]'> <a href="#">health</a></button> </p>
                        </div>
                        <div className='epi-all-main-text'>
                            <div className='epi-all-epi-no flex justify-between items-center'>
                                <h3>Episode 1</h3>
                                <h4>Featured Episode</h4>
                            </div>
                            <h2>Are you a Perplexed Mind Person?</h2>

                            <hr className="w-[100%] h-[1px] mb-[20px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod <p></p> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <p></p> veniam, quis nostrud.</p>
                            <div className='epi-all-hero-right flex items-center'>
                                <div className='flex justify-center items-center gap-[10px]'>
                                    <img src={avatar} alt="" />
                                    <span> <strong className='font-[500] text-[#4D4D4D] text-[14px]'> Hosted by: </strong> <strong className='text-[#CD4631] font-[700] text-[14px]'> <a href="#">Jone Doe</a></strong></span>
                                </div>
                                <div className='epi-date-txt'>
                                    <p className=''>Sep 22, 2023</p>
                                </div>
                            </div>

                            <div className='epiall-btn flex items-center gap-[20px]'>
                                <button className='a-page-btn-two'> <a href="#">SUBSCRIBE</a></button>
                                <button className='epi-page-btn flex items-center justify-center gap-[10px]'> <MdPlayArrow size='24px' /> <a href="#">LISTEN NOW</a>( 44 Minute )</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className='epi-latest-main container mx-auto mt-[100px] '>
                <div className='epi-text'>
                    <h2>Latest Episode</h2>
                </div>

                <div className='filter-btn flex justify-center item-center mb-[20px] pt-[100px]'>
                    <ul>
                        <li onClick={() => handleType('All')}>All</li>
                        <li onClick={() => handleType('Business')}>Business</li>
                        <li onClick={() => handleType('Comedy')}>Comedy</li>
                        <li onClick={() => handleType('Education')}>Education</li>
                        <li onClick={() => handleType('Health')}>Heath</li>
                        <li onClick={() => handleType('News')}>News</li>
                        <li onClick={() => handleType('Tech')}>Tech</li>
                    </ul>
                </div>
                <hr className="w-[100%] h-[1.5px] mb-[20px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                <div className='epi-card-main grid grid-cols-2 gap-[20px] mb-[150px] mt-[100px]'>

                    {filterData?.map((list, index) => (
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
                                        <button key={i} className='hover:bg-[#CD4631] transition duration-150 hover:text-[#fff] text-[12px] font-medium leading-[160%] border-[1px] border-[#000000] rounded-md mt-[20px] mb-[16px] p-[6px] mr-[6px]'> <a href="#"> {tag} </a></button>
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
            </section>
        </div>
    );
};

export default EpisodeMain;