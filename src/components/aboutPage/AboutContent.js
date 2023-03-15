import React, { useEffect, useRef, useState } from 'react';
import './AboutPage.css'
import hroimg1 from '../../images/elements/hero-left.png';
import hroimg2 from '../../images/elements/hero-right.png';
import rodemic from '../../images/aboutmain/img.png';
import avatar from '../../images/aboutmain/avatar.png';
import avatar2 from '../../images/aboutmain/avatar 2.png';
import { FaTiktok, FaTwitter, FaInstagram } from "react-icons/fa";
import aleft from '../../images/testimonials/aleft.png';
import aright from '../../images/testimonials/aright.png'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


const AboutHero = () => {

    const [sponsor, setSponsor] = useState([])

    useEffect(() => {
        fetch('sponsors.json')
            .then(res => res.json())
            .then(data => setSponsor(data))
    }, [])


    const slideRef = useRef();

    const handleNext = () => {
        slideRef.current.swiper.slidePrev();
    }

    const handlePrev = () => {
        slideRef.current.swiper.slideNext();
    }




    return (
        <div>
            <section className='bg-[#F7EDE8]'>
                <div className='heroimg1 '><img src={hroimg1} alt="" /></div>
                <div className='heroimg2'><img src={hroimg2} alt="" /></div>

                <div className='about-main-middle'>
                    <h2>About</h2>
                    <h3 className='text-[#CD4631] text-[48px]'>Pod of Box</h3>
                    <p className='a-p-style mx-auto w-[36%] mb-[70px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam-quis.
                    </p>

                    <div className='a-btn-main flex gap-[20px] justify-center items-center'>
                        <button className='a-page-btn'>BECOME SPONSOR</button>
                        <button className='a-page-btn-two'>SUBSCRIBE</button>
                    </div>

                </div>
            </section>

            <section className='container mx-auto bg-white'>
                <div className='about-main-card gap-5 mb-[21px]'>
                    <div className='ab-card-d'>
                        <h2>26 <span>K</span></h2>
                        <p>Community Members </p>
                    </div>
                    <div className='ab-card-d'>
                        <h2>128 <span>K</span></h2>
                        <p>Podcast Subscriber </p>
                    </div>
                    <div className='ab-card-d'>
                        <h2>59 <span>K</span></h2>
                        <p>Daily Listeners </p>
                    </div>
                </div>

                <div className='a-p-m-title'>
                    <h2>What Our Listeners Say</h2>
                    <p>Their Experience Throughout every platform</p>
                </div>
                <div className='mx-auto'>
                    <img className='mx-auto mt-[20px]' src={rodemic} alt="" />
                </div>

                <div>
                    <h2 className='about-his-h2'>About and History</h2>

                    <div className='about-his-p flex gap-[20px] mb-[80px] justify-center'>
                        <div className='a-his-w w-[570px]'>
                            <p>Eu non <strong>diam</strong> phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam <strong>elementum pulvinar.</strong>

                                <p className='pt-[20px]'>Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.</p> </p>
                        </div>
                        <div className='a-his-w w-[570px]'>
                            <p>Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong> elit. Quam pellentesque at bibendum euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi. <strong>Amet</strong> interdum imperdiet laoreet <strong>morbi</strong> tincidunt fermentum, libero. Ante enim eget. <p className='pt-[15px]'> Viverra at porttitor accumsan. Orci non here</p></p>
                        </div>
                    </div>

                    <hr className="w-[81%] h-[1px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                    <div className='founder-padding pb-[140px]'>
                        <h2 className='about-his-h2'>Founder and Main Host</h2>
                        <div className='host-main flex gap-[20px] justify-center mx-auto'>
                            <div className='host-main-w flex bg-white border-[1px] border-[#000] rounded-lg p-[16px] w-[570px]'>
                                <div><img src={avatar} alt="" /></div>
                                <div className='founder-card-txt'>
                                    <h3>Host 1</h3>
                                    <h2>Porter <br /> Severus</h2>
                                    <p>Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>

                                    <hr className="w-[89%] h-[1px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                                    <div className='flex justify-end items-center gap-[19px] pr-[17px]'>
                                        <h4>Follow Me: </h4>
                                        <span className='flex items-center gap-[10px] mt-[8px]'>
                                            <FaTiktok></FaTiktok>
                                            <FaTwitter></FaTwitter>
                                            <FaInstagram></FaInstagram>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='host-main-w flex bg-white border-[1px] border-[#000] rounded-lg p-[16px] w-[570px]'>
                                <div><img src={avatar2} alt="" /></div>
                                <div className='founder-card-txt'>
                                    <h3>Host 2</h3>
                                    <h2>Marques <br /> Keith</h2>
                                    <p>Lorem ipsum dolor sit amet con sectet piscing elit, sed do eiusmod tempor rarylet podofcast.</p>

                                    <hr className="w-[89%] h-[1px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                                    <div className='flex justify-end items-center gap-[19px] pr-[17px]'>
                                        <h4>Follow Me: </h4>
                                        <span className='flex items-center gap-[10px] mt-[8px]'>
                                            <FaTiktok></FaTiktok>
                                            <FaTwitter></FaTwitter>
                                            <FaInstagram></FaInstagram>
                                        </span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#F7EDE8]'>
                <div className='container mx-auto'>
                    <div className='our-s-txt'>
                        <h2>Our Sponsor</h2>
                        <p>Our current official sponsor</p>
                    </div>

                    <div className=''>
                        <Swiper
                            slidesPerView={2}
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
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                }
                            }}
                            className="mySwiper"
                        >
                            {sponsor.map((list, index) => (
                                <SwiperSlide key={index}>
                                    <div className='sponsor-card-main'>
                                        <img className='mx-auto mb-[20px]' src={list.img} alt="" />
                                        <p>{list.quote}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='flex gap-[15px] pb-[60px] mt-[60px]'>
                        <img className='testi-button' src={aleft} alt="" id='rightArrow' onClick={handleNext} />
                        <img className='testi-button' src={aright} alt="" id='leftArrow' onClick={handlePrev} />
                    </div>
                </div>
            </section>

            <section className='container mx-auto'>
                <div className='g-i-t'>
                    <h2>Get in touch</h2>
                    <p>Send your message to us</p>
                </div>

                <hr className="w-[53%] h-[1px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                <div className='contact-f-main mt-[40px]'>
                    <form>
                        <div className='row'>
                            <div className='input-group'>
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id='name' placeholder='Your Name Here' required />
                            </div>
                            <div className='input-group'>
                                <label htmlFor="email">Email</label>
                                <input type="text" id='email' placeholder='Email address'  required />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='input-group'>
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id='phone' placeholder='Phone'  required />
                            </div>
                            <div className='input-group'>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id='subject' placeholder='Subject...'  required />
                            </div>
                        </div>

                        <div className='input-group'>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder='Your Message Goes here'  rows="8"></textarea>
                        </div>

                        <button className='git-btn'>Send Message</button>
                    </form>
                </div>
            </section>


        </div>
    );
};

export default AboutHero;