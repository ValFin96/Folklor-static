import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => {

  const [isLaughing, setIsLaughing] = useState(false);

  useEffect(() => {
    // Function to toggle the laughing state when scrolling past the team photo
    const handleScroll = () => {
      const teamPhoto = document.getElementById('teamPhoto');
  if (teamPhoto) {
    const teamPhotoPosition = teamPhoto.getBoundingClientRect();
    const fullyInView = teamPhotoPosition.top >= 0 && teamPhotoPosition.bottom <= window.innerHeight;

    setIsLaughing(fullyInView);
  }
};

    // Add an event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    

 return( 
 <div>
 <div className="app__aboutus app__bg flex__center section__padding" id="about">
    

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h2 className="headtext__matter">About Us</h2>
        <p className="p__heebo">
          We believe that dining is not just about food, but also about the overall experience. 
          That's why we've created a warm and inviting atmosphere that is perfect for everything from a romantic dinner for two to a lively gathering with friends and family. 
          Our friendly and knowledgeable staff is always on hand to answer any questions you may have and to help you choose the perfect dish to suit your taste.
        </p>
      </div>

      <div className="app__aboutus-content_history">
        <h2 className="headtext__matter">Our History</h2>
        <p className="p__heebo">
          Our restaurant is proud to be the sister restaurant of Warike Peruvian Restaurant in Surry Hills, a beloved dining destination that has been serving up modern Peruvian cuisine. 
          Building on the success of Warike, our restaurant was created with the vision of showcasing the fusion of Peruvian and Japanese culinary traditions through the lens of Nikkei cuisine.
        </p>
      </div>

      <div className="app__team-photo" id="teamPhoto">
          <img
            src={isLaughing ? images.LimaTeam2 : images.LimaTeam1}
            alt="Lima Restaurant Team"
            title="Lima Restaurant Team" 
            loading="lazy"
            width="100%"
            height="100%"
          />
        </div>
    </div>
    
  </div>
  </div>
);
}

export default AboutUs;
