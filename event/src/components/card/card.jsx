import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ img, title, navlink, body_content, src_images }) => {
  return (
    <div className="card-container">
      <img src={img} className="card-image" alt={title} />
      <div className="card-text">
        <h1 className="card-title">{title}</h1>
        <div className="card-nav">
          <Link to={navlink.pathname} state={navlink.state}>
            <MdArrowOutward/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
