import React from 'react';
import About from '../about/About';
import Articles from '../articles/Articles';
import Covers from '../covers/Covers';
import Cta from '../cta/Cta';
import Episodes from '../episodes/Episodes';
import Footer from '../footer/Footer';
import Hero from '../hero/Hero';
import Membership from '../membership/Membership';
import Nav from '../nav/Nav';
import Sponsor from '../sponsor/Sponsor';
import Testimonial from '../testimonial/Testimonial';

const MainHome = () => {
    return (
        <div>
            <div className='bg-[#F7EDE8] pb-[140px]'>
                <Nav></Nav>
                <Hero></Hero>
                <Covers></Covers>
            </div>
            <About></About>
            <div className='bg-[#EDF3F7]'>
                <Testimonial></Testimonial>
            </div>
            <div className='bg-[#ffffff]'>
                <Membership></Membership>
            </div>
            <div className='bg-[#F7EDE8]'>
                <Episodes></Episodes>
            </div>
            <div>
                <Sponsor></Sponsor>
            </div>
            <div>
                <Articles></Articles>
            </div>
            <div className='bg-[#EDF3F7]'>
                <Cta></Cta>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainHome;