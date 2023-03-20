/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Nav from '../nav/Nav';
import hroimg1 from '../../images/elements/hero-left.png';
import hroimg2 from '../../images/elements/hero-right.png';
import art1 from '../../images/article/art1.png';
import { BsTwitter, BsInstagram, BsTiktok } from "react-icons/bs";
import john from '../../images/elements/john.png';
import spotify from '../../images/elements/spotifyicon.png';
import quote from '../../images/elements/quote.png';
import vector4 from '../../images/elements/Vector 4.png';
import star4 from '../../images/elements/Star 4.png';
import doodle from '../../images/article/Doodle.png';
import doodle2 from '../../images/article/Doodle2.png';
import { Link } from 'react-router-dom';
import singleArticle from '../../fakeData/articlesall.json';
import { GridLoader } from 'react-spinners';
import Cta from '../cta/Cta';
import Footer from '../footer/Footer';

const SingleArticle = () => {
    const spliceData = singleArticle.splice(0, 2)
    const [allArticle] = useState(spliceData)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)

    }, [])

    
    useEffect(() => {
        scrollUp()
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
        })
    }


    return (
        <div>
            <div className='bg-[#F7EDE8]'> <Nav></Nav> </div>
            <section className='bg-[#F7EDE8] pb-[50px] min-h-screen'>
                <div>
                    <div className='heroimg1 md:hidden lg:hidden xl:hidden'><img src={hroimg1} alt="" /></div>
                    <div className='heroimg2'><img src={hroimg2} alt="" /></div>

                    <div>
                        <div className='back-to-art container mx-auto flex justify-between items-center mb-[47px] pt-[200px]'>
                            <Link to='/articles'><p>Back to articles</p></Link>
                            <p>Sep 12, 2023</p>
                        </div>
                        <div className='single-art-title'>
                            <h3>Tips & Tricks</h3>
                            <h2>Doodle Artwork 101</h2>
                            <div className='flex gap-[6px] justify-center items-center'>
                                <button className='border-[1px] border-[#000] rounded-md py-[6px] px-[12px]'>art</button>
                                <button className='border-[1px] border-[#000] rounded-md py-[6px] px-[12px]'>tips and trick</button>
                                <button className='border-[1px] border-[#000] rounded-md py-[6px] px-[12px]'>creative</button>
                            </div>

                            <div className='flex justify-center items-center mt-[40px] gap-[25px] pb-[80px]'>
                                <BsTwitter></BsTwitter>
                                <BsInstagram></BsInstagram>
                                <BsTiktok></BsTiktok>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container mx-auto'>
                <div>
                    <img className='mx-auto rounded-md mt-[50px] pr-[10px] pl-[10px]' src={art1} alt="" />
                </div>
                <div>
                    <h2 className='about-his-h2'>Doodle for our podcast background room</h2>
                    <div className='about-his-p flex gap-[40px] mb-[80px] justify-center'>
                        <div className='a-his-w w-full'>
                            <p>Eu non <strong>diam</strong> phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id diam vel quam <strong>elementum pulvinar.</strong>

                                <p className='pt-[20px]'>Elementum eu facilisis sed odio morbi quis commodo. Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.</p> </p>
                        </div>
                        <div className='a-his-w w-full'>
                            <p>Quis dictum cursus faucibus mattis dignissim. Pellentes
                                que purus in sed sodales in mauris molestie. Eleifend est cons
                                ctetur interdum eu in auctor. Gravida leo et.</p>
                        </div>
                    </div>
                    <hr className="container w-[100%] h-[1px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />
                </div>
            </section>

            <section className='mt-[100px] mb-[100px] pr-[10px] pl-[10px]'>
                <div className='container bg-[#F7EDE8] mx-auto rounded-lg h-[366px]'>
                    <img className='about-vector' src={vector4} alt="" />
                    <img className='about-star' src={star4} alt="" />

                    <div className='flex justify-center relative about-2nd'>
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
            </section>

            <section className='container mx-auto pl-[10px] pr-[10px]'>
                <div className='flex justify-between items-center gap-[20px] ml-[20px]'>
                    <div className='single-ul-design'>
                        <h3>Bullet list example:</h3>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong>elit. Quam pellentesque at bibendum euismod tellus duis curs us dignissim odio. Sit vulputate et integer in.
                            </li>
                            <li>
                                Sit vel, senectus iaculis morbi. <strong>Amet</strong> interdum imperdiet laoreet <strong>morbi</strong> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. <a className='underline decoration-1 font-[600]' href="#">Orci non here</a>
                            </li>
                            <li>
                                Quis dictum cursus faucibus mattis dignissim. Pellent
                                que <strong>purus in sed</strong> sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                            </li>
                        </ul>
                    </div>
                    <div className='single-ul-design'>
                        <h3>Number list example:</h3>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet, <strong>consectetur adipiscing</strong>elit. Quam pellentesque at bibendum euismod tellus duis curs us dignissim odio. Sit vulputate et integer in.
                            </li>
                            <li>
                                Sit vel, senectus iaculis morbi. <strong>Amet</strong> interdum imperdiet laoreet <strong>morbi</strong> tincidunt fermentum, libero. Ante enim eget viverra at porttitor accumsan. <a className='underline decoration-1 font-[600]' href="#">Orci non here</a>
                            </li>
                            <li>
                                Quis dictum cursus faucibus mattis dignissim. Pellent
                                que <strong>purus in sed</strong> sodales in mauris molestie. Eleifend est consctetur interdum eu in auctor. Gravida leo et.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-[20px] mb-[140px] mt-[130px]'>
                    <div className='text-center'>
                        <img className='w-[570px]' src={doodle} alt="" />
                        <p className='mt-[20px] text-[14px]'>this is an image with a caption example</p>
                    </div>
                    <div className='text-center text-[#CD4631] text-[14px] underline decoration-1'>
                        <img className='w-[570px]' src={doodle2} alt="" />
                        <h4 className='mt-[20px]'> <a href="#">  Download here </a></h4>
                    </div>
                </div>
            </section>

            <section className='bg-[#F7EDE8]'>
                <div className='container mx-auto'>
                    <div>
                        <div className='articleh2 text-center pt-[140px]'>
                            <h2 className=''>Related Article</h2>
                            <p className=''>News, tips, tricks and more</p>
                        </div>
                    </div>

                    {
                        loading ? <div className='flex justify-center items-center mb-[80px]'><GridLoader color="#36d7b7" size={30} /></div> :
                            <div className='article-main flex justify-center gap-[20px]'>
                                {
                                    allArticle.map((list, index) => (
                                        <div key={index} className='article-card w-[570px] h-[100%] border-2 border-[#000] rounded-lg art-shadow mb-[100px] bg-white'>
                                            <img className='art-img mx-auto p-[10px]' src={list.img} alt="Article images" />
                                            <div className='pl-[16px] pt-[40px] pr-[16px]'>
                                                <h2 className='mb-[6px] font-bold text-[14px] leading-[160%] text-[#4D4D4D]'>{list.category}</h2>
                                                <a href="#"><h1 className='art-title mb-[20px] text-[28px] leading-[140%] tracking-[0.02em] font-[700] hover:text-[#CD4631]'>{list.title}</h1></a>
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
                    }

                    <div className='flex justify-center pb-[140px]'>
                        <Link to='/articles'> <a href="#"><button className='art-btn'>BROWSE ALL</button></a> </Link>
                    </div>
                </div>
            </section>

            <section className='bg-[#EDF3F7]'>
                <Cta></Cta>
            </section>
            <section>
                <Footer></Footer>
            </section>

        </div>
    );
};

export default SingleArticle;