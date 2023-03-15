import React from 'react';
import Cta from '../cta/Cta';
import Footer from '../footer/Footer';
import Nav from '../nav/Nav';
import ArticleContent from './ArticleContent'

const articlePage = () => {
    return (
        <div>
            <div className='bg-[#F7EDE8]'> <Nav /> </div>
            <ArticleContent />
            <div className='bg-[#EDF3F7]'> <Cta></Cta> </div>

            <Footer></Footer>

        </div>
    );
};

export default articlePage;