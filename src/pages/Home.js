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
    const [showSplash, setShowSplash] = useState(false);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisitedHome');

        if (!hasVisited) {
            setShowSplash(true);
            const timer = setTimeout(() => {
                setShowSplash(false);
                setShowContent(true);
                sessionStorage.setItem('hasVisitedHome', 'true');
            }, 3000); // Adjust splash duration if needed

            return () => clearTimeout(timer);
        } else {
            setShowContent(true);  // Directly show content if already visited
        }
    }, []);

    return (
        <>
            {showSplash ? (
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
