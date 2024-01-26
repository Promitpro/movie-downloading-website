import React from 'react';
import Banner from './Banner';
import Movies from './Movies';
import LeftSideLatest from './LeftSideLatest';
import LeftSideTvSerieses from './LeftSideTvSerieses';

const LeftSideNav = () => {
    return (
        <section>
            <Banner></Banner>
            <LeftSideLatest></LeftSideLatest>
            <hr className='mt-4 ml-4 mr-2 border-gray-400 border opacity-50' />
            <LeftSideTvSerieses></LeftSideTvSerieses>
            
            
        </section>
    );
};

export default LeftSideNav;