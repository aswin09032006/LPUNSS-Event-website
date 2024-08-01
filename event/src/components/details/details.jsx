import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './details.css';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, body_content, src_images } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (src_images && src_images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % src_images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [src_images]);

  if (!location.state) {
    return null; 
  }

  return (
    <div className='details-page-container'>
      <div className='details-page-header'>
        <h1 className='details-page-title'>{title}</h1>
      </div>
      <div className='details-page-body'>
        <p className='details-page-content'>{body_content}</p>
        <p className="img-gallery-text">Image Gallery</p>
        <div className='details-page-img-container'>
          {src_images.map((src, index) => (
            <img
              src={src}
              key={index}
              className={`details-page-img ${index === currentIndex ? 'visible' : ''}`}
              alt={`detail-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
