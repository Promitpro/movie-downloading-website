import React from 'react';
import LeftSideNav from './LeftSideNav';
import RightSideNav from './RightSideNav';


const Container = () => {
    const customMaxWidth = '1200px';
    return (
        <div style={{ maxWidth: customMaxWidth, margin: '0 auto' }} className='bg-primary'>
            <div className='flex flex-col lg:flex lg:flex-row mt-10'>
                <div style={{width: '840px'}} className='w-full lg:w-1/3'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div style={{width: '360px'}} className='w-full lg:w-2/3'>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default Container;