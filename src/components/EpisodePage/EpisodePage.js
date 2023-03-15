import React from 'react';
import Nav from '../nav/Nav';
import EpisodeAll from '../EpisodePage/EpisodeAll';
import Cta from '../cta/Cta'
import Footer from '../footer/Footer';

const EpisodePage = () => {
    return (
        <div>
            <div className='bg-[#F7EDE8]'><Nav></Nav></div>
            <EpisodeAll />
            <div className='bg-[#EDF3F7]'>
                <Cta></Cta>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EpisodePage;