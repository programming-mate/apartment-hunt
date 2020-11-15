import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HouseRent from '../HouseRent/HouseRent';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HouseRent></HouseRent>
            <Footer></Footer>
        </div>
    );
};

export default Home;