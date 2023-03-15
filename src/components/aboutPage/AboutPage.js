import React from 'react';
import Nav from '../nav/Nav';
import AboutContent from './AboutContent';
import Cta from '../cta/Cta';
import Footer from '../footer/Footer';

const AboutPage = () => {
    return (
        <div>
            <div className='bg-[#F7EDE8]'>
                <Nav></Nav>
            </div>
            <AboutContent />
            <div className='bg-[#EDF3F7]'>
                <Cta></Cta>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutPage;