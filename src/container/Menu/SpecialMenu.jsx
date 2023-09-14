import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SubHeading } from '../../components';
import PdfDrink from '../../assets/Lima Drinks Menu.pdf';
import PdfFood from '../../assets/Lima Food Menu.pdf';
import PretheatreMenu from '../../assets/Pre-theatre Menu.pdf';
import './SpecialMenu.css';

function SpecialMenu() {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      {/* <Helmet>
        <title>Lima's Menu</title>
        <meta name="description" content="Discover our menu" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lima Restaurant Menu" />
        <meta property="og:description" content="Discover our menu" />
        <meta property="og:image" content="%PUBLIC_URL%/favicon.ico?v=2" />
        <meta property="og:url" content="https://limarestaurant.com.au/#menu" />
      </Helmet> */}
      <div className="app__specialMenu-title">
        <SubHeading title="Preview Our Menu" />
        <h2 className="headtext__matter">Menu</h2>
      </div>

      <div className="app__specialMenu-menu">
        <a
          href={PdfFood}
          style={{ textAlign: 'center', marginLeft: '0.5rem', marginRight: '0.5rem', marginBottom: '0.5rem' }}
          target="_blank"
          rel="noreferrer"
        >
          <button className="custom__button_mobile">Food</button>
        </a>

        <a
          href={PretheatreMenu}
          style={{ textAlign: 'center', marginLeft: '0.5rem', marginRight: '0.5rem', marginBottom: '0.5rem' }}
          target="_blank"
          rel="noreferrer"
        >
          <button className="custom__button_mobile">Pre-Theatre</button>
        </a>
        
        <a
          href={PdfDrink}
          style={{ textAlign: 'center', marginLeft: '0.5rem', marginRight: '0.5rem', marginBottom: '0.5rem' }}
          target="_blank"
          rel="noreferrer"
        >
          <button className="custom__button_mobile">Drinks</button>
        </a>
        
      </div>
    </div>
  );
}

export default SpecialMenu;
