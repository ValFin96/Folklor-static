import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, FindUs, Footer, Gallery, Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {


  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <FindUs />
      <Gallery />
      <Footer />
    </div>
  )
};

export default App;
