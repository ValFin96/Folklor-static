import React, { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, FindUs, Footer, Gallery, Header, SpecialMenu, BookTable, NotFound } from './container';
import { Navbar, ReservationsNavbar } from './components';
import './App.css';

const App = () => {

  return (
    <div>
      <HelmetProvider>
        <Router>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<BookTable />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
};

const Home = () => {
  return (
    <>
    <Navbar/>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <FindUs />
      <Gallery />
    </>
  );
};

export default App;

