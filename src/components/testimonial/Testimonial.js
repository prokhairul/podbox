import React, { useEffect, useRef, useState } from 'react';
import './Testimonial.css'
import Scribble from '../../images/testimonials/Scribble.png';
import Sparkle from '../../images/testimonials/Sparkle.png';
import aleft from '../../images/testimonials/aleft.png';
import aright from '../../images/testimonials/aright.png'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';



const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([])

    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    const slideRef = useRef();

    const handleNext = () => {
        slideRef.current.swiper.slidePrev();
    }

    const handlePrev = () => {
        slideRef.current.swiper.slideNext();
    }

    return (
        <div className='container relative mx-auto'>
            <img className='Scribble top-[-9.3%] left-[46%] absolute' src={Scribble} alt="" />
            <img className='Sparkle top-[8%] left-[21%] absolute' src={Sparkle} alt="" />

            <div className='testi-h2-3'>
                <h2>What our Listeners say</h2>
                <h3>Their experience throughout every platforms</h3>
            </div>

            <div className='flex justify-items-center'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={false}
                    ref={slideRef}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                    className="mySwiper"
                >
                    {testimonial.map((list, index) => (
                        <SwiperSlide key={index}>
                            <div className='testi-card rounded-lg'>
                                <img className='m-[40px] pt-[40px]' src={list.quote} alt="" />
                                <p className='ml-[40px]  mr-[40px]'>{list.short}</p>
                                <div className='flex items-center gap-[10px] ml-[40px] mt-[28px] pb-[40px'>
                                    <img src={list.img} alt="" />
                                    <span className='font-medium text-[14px] leading-[140%]'>{list.imgtext} </span>
                                    <img src={list.himg} alt="" />
                                    <span className='font-bold text-[14px] leading-[160%]'>{list.htext}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='flex gap-[15px] ml-[10px] pb-[60px]'>
                <img className='testi-button' src={aleft} alt="" id='rightArrow' onClick={handleNext} />
                <img className='testi-button' src={aright} alt="" id='leftArrow' onClick={handlePrev} />
            </div>
        </div >
    );
};

export default Testimonial;