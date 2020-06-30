import React from 'react';
import './card-list-styles.css';
export const CardList = ({ name }) => {
  return (
    <div className='card-list'>
      <h2>Hello From {name}</h2>
    </div>
  );
};
