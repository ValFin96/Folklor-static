import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>4<img src={images.notfoundImage} alt="plate" className="plate" />4 </h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
