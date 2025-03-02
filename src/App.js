import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import '../src/i18n.js';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import AroundWorld from './pages/AroundWorld';
import Blog from './pages/Blog';
import ServiceDetails from './components/ServiceDetail.js';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path='/services' element={<Services />} />
            <Route path='/AroundWorld' element={<AroundWorld />} />
            <Route path='/blog' element={<Blog />} />
            <Route path="/service/:id" element={<ServiceDetails />} /> {/* New dynamic route */}


          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
