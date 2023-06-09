import React from 'react';
import './Header.css';


const Header = () => {
  function handleClick() {
    window.location.href="/reservations"
  }

return(
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      
      <h1 className="app__header-h1">The Ultimate Peruvian-Asian Fusion Destination</h1>
      <h1 className="p__opensans" style={{margin: '2rem 0'}}>
        Welcome to Folklor, where the flavors of many nations blend into a vibrant culinary celebration.
      </h1>
      <button type="button" className="custom__button_mobile" onClick={handleClick}>Book Table</button>

    </div>

    {/* <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" className="header__img"/>
    </div> */}
  </div>
);
  }
export default Header;
