/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import './Covers.css';
import sponsor1 from '../../images/sponsors/1.png';
import sponsor2 from '../../images/sponsors/2.png';
import sponsor3 from '../../images/sponsors/3.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, } from "swiper";
import 'swiper/css';

const Covers = () => {

    const [cover, setCover] = useState([])
    useEffect(() => {
        fetch('episodes.json')
            .then(res => res.json())
            .then(data => setCover(data))
    }, [])

    return (
        <div className='main-cards container'>
            <div className='gap-10 mt-[120px] md:pl-[10px] md:pr-[10px]'>

                <Swiper

                    spaceBetween={30}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}

                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },

                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        // when window width is >= 768px
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }
                    }}

                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {cover.map((list, index) => (
                        <SwiperSlide key={index} >
                            <div className='relative main-card lg:pl-[10px] lg:pr-[10px]'>
                                <a href="#"><img src={list.img} alt="Cover Image" /></a>
                                <span className='top-[100%] absolute img-title'>{list.title}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='mt-[120px]'>
                <div className='sponsor-border flex items-center justify-center'>
                    <h2>Sponsored by:</h2>
                    <img className='md:w-[28%] sm:w-[10px]' src={sponsor1} alt="" />
                    <img className='md:w-[28%]' src={sponsor2} alt="" />
                    <img className='md:w-[28%]' src={sponsor3} alt="" />
                </div>
            </div>
        </div>
    );
};


export default Covers;