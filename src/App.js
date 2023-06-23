import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, FindUs, Footer, Gallery, Header, SpecialMenu, BookTable } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <HelmetProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<BookTable />} />
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
      <Header />
      <AboutUs />
      <SpecialMenu />
      <FindUs />
      <Gallery />
    </>
  );
};

export default App;

