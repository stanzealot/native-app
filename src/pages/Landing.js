import React, { useEffect } from 'react'
import Header from '../components/header/Header';
import LandingHero from '../components/landing/LandingHero';
import Partners from '../components/landing/Partners';
import Main from '../components/landing/Main';
import Footer from '../components/landing/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Landing() {
  

  return (
    <div className='landing-page'>
      <Header />
      <LandingHero/>
      <Partners />
      <Main />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default Landing;
