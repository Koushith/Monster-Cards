import React from 'react';
import './menu-item.styles.scss';

// this is nothing but card on homepage
const MenuItem = ({ title, image, size }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`${size} menu-item`}
    >
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
