import React, { useState, useEffect } from 'react';
import logo from '../images/2k1.png';
import '../../src/SplashScreen.css';  

function SplashScreen({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        }, 2500);  // Slightly longer for a premium feel
    }, []);

    if (isLoading) {
        return (
            <div className={`splash-container ${fadeOut ? 'fade-out' : 'fade-in'}`}>
                <div className="logo-wrapper">
                    <img src={logo} alt="Logo" className="logo-3d pulse-animation" />
                </div>
            </div>
        );
    }

    return children;
}

export default SplashScreen;
