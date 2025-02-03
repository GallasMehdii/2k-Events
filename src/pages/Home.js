import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import SplashScreen from './SplashScreen';

const Home = () => {
    return (
        <SplashScreen>
            <Hero />
            <Intro />
            <Services />
            <Portfolio />
            <Clients />
            <Cta/>
            <Footer />
        </SplashScreen>
    )
}

export default Home;