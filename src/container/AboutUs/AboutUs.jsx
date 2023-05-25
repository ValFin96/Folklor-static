import React from 'react';
import { Helmet } from 'react-helmet-async';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <Helmet>
<title>About Us</title>
<meta name='description' content='Find out more about our restaurant' />
<meta property="og:type" content="website" />
<meta property="og:title" content='About Us' />
<meta property="og:description" content='Find out more about our restaurant' />
<meta property="og:image" content="%PUBLIC_URL%/favicon.ico?v=2" />
<meta property="og:url" content="https://folklorrestaurant.com.au/#about" />
</Helmet>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h2 className="headtext__cormorant">About Us</h2>
        {/* <img src={images.spoon} alt="about_spoon" className="spoon__img"/> */}
        <p className="p__opensans">
          We believe that dining is not just about food, but also about the overall experience. 
          That's why we've created a warm and inviting atmosphere that is perfect for everything from a romantic dinner for two to a lively gathering with friends and family. 
          Our friendly and knowledgeable staff is always on hand to answer any questions you may have and to help you choose the perfect dish to suit your taste.
        </p>
      </div>

      <div className="app__aboutus-content_history">
        <h2 className="headtext__cormorant">Our History</h2>
        {/* <img src={images.spoon} alt="history_spoon" className="spoon__img" /> */}
        <p className="p__opensans">
          Our restaurant is proud to be the sister restaurant of Warike Peruvian Restaurant in Surry Hills, a beloved dining destination that has been serving up modern Peruvian cuisine. 
          Building on the success of Warike, our restaurant was created with the vision of showcasing the fusion of Peruvian and Asian culinary traditions through the lens of Chifa and Nikkei cuisine.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
