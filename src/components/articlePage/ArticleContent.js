/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './articlePage.css';
import hroimg1 from '../../images/elements/hero-left.png';
import hroimg2 from '../../images/elements/hero-right.png';
import { Link } from 'react-router-dom';



const ArticleContent = () => {

    const [article, setArticle] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [Showdata, setShowdata] = useState(true)

    useEffect(() => {
        fetch('articles.json')
            .then(res => res.json())
            .then(data => setArticle(data))
    }, [])

    const handleType = (btnType) => {
        if (btnType === 'All') {
            setShowdata(true)
        } else {
            setShowdata(false)
        }
        const content = article.filter(article => article.type === btnType)
        setFilterData(content)
    }

    useEffect(() => {
        scrollUp()
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
        })
    }


    if (Showdata) {
        return (
            <div>
                <section className='bg-[#F7EDE8] pb-[50px]'>
                    <div>
                        <div className='heroimg1'><img src={hroimg1} alt="" /></div>
                        <div className='heroimg2'><img src={hroimg2} alt="" /></div>

                        <div className='hero-middle'>
                            <h2>Article</h2>
                            <h3> and <span className='text-[#CD4631]'> News</span> </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt <br />
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam-quis.
                            </p>
                        </div>

                        <form className='flex justify-center items-center mx-auto mt-[40px]'>
                            <div className='input-group-art'>
                                <input type="text" id='search' required />
                                <label htmlFor="name"> <i class="fa-solid fa-magnifying-glass"></i> Search...</label>
                            </div>
                        </form>

                    </div>
                </section>

                <section className='epi-latest-main container mx-auto mt-[100px] '>
                    <div className='epi-text'>
                        <h2>Latest Posts</h2>
                    </div>

                    <div className='filter-btn flex justify-center item-center mb-[20px] pt-[100px]'>
                        <ul>
                            <li>All</li>
                            <li onClick={() => handleType('Business')}>Business</li>
                            <li onClick={() => handleType('News')}>News</li>
                            <li onClick={() => handleType('Tips')}>Tips & Tricks</li>
                            <li onClick={() => handleType('Podcast')}>Podcast</li>
                            <li onClick={() => handleType('Productivity')}>Productivity</li>
                        </ul>
                    </div>
                    <hr className="w-[100%] h-[1.5px] mb-[20px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                    <div className='article-main grid grid-cols-3  gap-5 mb-[100px]'>
                        {
                            article.map((list, index) => (
                                <div key={index} className='article-card   border-2 border-[#000] rounded-lg art-shadow mb-[20px] bg-white'>
                                    <img className='art-img mx-auto p-3' src={list.img} alt="Article images" />
                                    <div className='pl-[16px] pt-[40px] pr-[16px]'>
                                        <h2 className='mb-[6px] font-bold text-[14px] leading-[160%] text-[#4D4D4D]'>{list.category}</h2>
                                        <Link to='/article'> <a href="#"><h1 className='art-title mb-[20px] text-[36.65px] leading-[140%] tracking-[0.02em] font-[700] hover:text-[#CD4631]'>{list.title}</h1></a></Link>
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
                </section>
            </div>
        );
    }

    return (
        <div>
            <section className='bg-[#F7EDE8] pb-[50px]'>
                <div>
                    <div className='heroimg1 '><img src={hroimg1} alt="" /></div>
                    <div className='heroimg2'><img src={hroimg2} alt="" /></div>

                    <div className='hero-middle'>
                        <h2>Article</h2>
                        <h3> and <span className='text-[#CD4631]'> News</span> </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt <br />
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam-quis.
                        </p>
                    </div>

                    <form className='flex justify-center items-center mx-auto mt-[40px]'>
                        <div className='input-group-art'>
                            <input type="text" id='search' required />
                            <label htmlFor="name"> <i class="fa-solid fa-magnifying-glass"></i> Search...</label>
                        </div>
                    </form>

                </div>
            </section>

            <section className='epi-latest-main container mx-auto mt-[100px] '>
                <div className='epi-text'>
                    <h2>Latest Posts</h2>
                </div>

                <div className='filter-btn flex justify-center item-center mb-[20px] pt-[100px]'>
                    <ul>
                        <li onClick={() => handleType('All')}>All</li>
                        <li onClick={() => handleType('Business')}>Business</li>
                        <li onClick={() => handleType('News')}>News</li>
                        <li onClick={() => handleType('Tips')}>Tips & Tricks</li>
                        <li onClick={() => handleType('Podcast')}>Podcast</li>
                        <li onClick={() => handleType('Productivity')}>Productivity</li>
                    </ul>
                </div>
                <hr className="w-[100%] h-[1.5px] mb-[20px] mx-auto my-1 bg-gray-500 border-0 rounded  dark:bg-gray-700" />

                <div className='article-main grid grid-cols-3  gap-5 mb-[100px]'>
                    {
                        filterData?.map((list, index) => (
                            <div key={index} className='article-card   border-2 border-[#000] rounded-lg art-shadow mb-[20px] bg-white'>
                                <img className='art-img mx-auto p-3' src={list.img} alt="Article images" />
                                <div className='pl-[16px] pt-[40px] pr-[16px]'>
                                    <h2 className='mb-[6px] font-bold text-[14px] leading-[160%] text-[#4D4D4D]'>{list.category}</h2>
                                    <a href="#"><h1 className='art-title mb-[20px] text-[36.65px] leading-[140%] tracking-[0.02em] font-[700] hover:text-[#CD4631]'>{list.title}</h1></a>
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
            </section>
        </div>
    );
};

export default ArticleContent;