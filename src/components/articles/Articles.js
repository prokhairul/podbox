/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './Articles.css';
import Scribble from '../../images/testimonials/Scribble.png';
import Vector from '../../images/article/Vector.png';
import Scribbleorn from '../../images/article/Scribble.png'
import { Link } from 'react-router-dom';

const Articles = () => {

    const [article, setArticle] = useState([]);

    useEffect(() => {
        fetch('articles.json')
            .then(res => res.json())
            .then(data => setArticle(data))
    }, [])


    return (
        <div>
            <div className='relative'>
                <img className='orna-show left-[46%] top-[-78px] absolute' src={Scribble} alt="" />
                <img className='orna-hidden left-[14.5%] top-[295px] absolute z-[-1]' src={Vector} alt="" />
                <img className='orna-hidden top-[880px] left-[73%]  absolute' src={Scribbleorn} alt="" />
            </div>

            <div className='container mx-auto'>
                <div>
                    <div className='articleh2 text-center pt-[140px]'>
                        <h2 className=''>Article and News</h2>
                        <p className=''>News, tips, tricks and more</p>
                    </div>
                </div>

                <div className='article-main flex justify-center gap-[20px]'>
                    {
                        article.splice(1, 2).map((list, index) => (
                            <div key={index} className='article-card w-[570px] h-[640px] border-2 border-[#000] rounded-lg art-shadow mb-[100px] bg-white'>
                                <img className='art-img mx-auto pt-[16px]' src={list.img} alt="Article images" />
                                <div className='pl-[16px] pt-[40px] pr-[16px]'>
                                    <h2 className='mb-[6px] font-bold text-[14px] leading-[160%] text-[#4D4D4D]'>{list.category}</h2>
                                    <Link to='/article'><a href="#"><h1 className='art-title mb-[20px] text-[36.65px] leading-[140%] tracking-[0.02em] font-[700] hover:text-[#CD4631]'>{list.title}</h1></a></Link>
                                    <p className='mb-[20px] text-[14px] leading-[160%] text-[#4D4D4D]'>{list.short_d}</p>
                                </div>

                                <hr className="w-[95%] h-[1px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                                <div className='flex justify-between items-center ml-[16px] pb-[16px]'>
                                    <div>
                                        {list.tag.split(',').map((tag, i) => (
                                            <button key={i} className='hover:bg-[#CD4631] transition duration-150 hover:text-[#fff] text-[12px] font-medium leading-[160%] border-[1px] border-[#000000] rounded-md mt-[20px] mb-[16px] p-[6px] mr-[6px]'>{tag}</button>
                                        ))}
                                    </div>

                                    <div>
                                        <p className='font-[700] text-[12px] leading-[160%] text-[#4D4D4D] mr-[16px]'>{list.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='flex justify-center pb-[140px]'>
                    <Link to='/articles'> <a href="#"><button className='art-btn'>BROWSE ALL</button></a> </Link>
                </div>
            </div>
        </div>
    );
};

export default Articles;