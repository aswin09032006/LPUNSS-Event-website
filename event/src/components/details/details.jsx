import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    <motion.div
      className='details-page-container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='details-page-header'>
        <h1 className='details-page-title' data-aos="fade-down">{title}</h1>
      </div>
      <div className='details-page-body'>
        <p className='details-page-content' data-aos="fade-right">{body_content}</p>
        <p className="img-gallery-text" data-aos="fade-left">Image Gallery</p>
        <div className='details-page-img-container'>
          {src_images.map((src, index) => (
            <motion.img
              src={src}
              key={index}
              className={`details-page-img ${index === currentIndex ? 'visible' : ''}`}
              alt={`detail-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Details;
