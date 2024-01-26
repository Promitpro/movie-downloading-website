import React, { useContext } from 'react';
import { AppContext } from './context';
import Search from './Search';
import Movies from './Movies';
import Footer from './Footer';
import Banner from './Banner';
import Container from './Container';

const Home = () => {

    return (
        <>
            <div className=''>
                <Search></Search>
                <Container></Container>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;