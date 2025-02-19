import React, { useEffect, useState } from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import SplashScreen from './SplashScreen';

const Home = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Simulate splash screen duration (e.g., 3 seconds)
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000); // Adjust time based on your splash screen duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!showContent ? (
                <SplashScreen />
            ) : (
                <>
                    <Hero />
                    <Intro />
                    <Services />
                    <Portfolio />
                    <Clients />
                    <Cta />
                    <Footer />
                </>
            )}
        </>
    );
};

export default Home;
