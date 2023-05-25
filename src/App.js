import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {


  return (
    <div>
      <HelmetProvider>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <FindUs />
      <Gallery />
      <Footer />
      </HelmetProvider>
    </div>
  )
};

export default App;
