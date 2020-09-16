import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_ft._CB404804383_.jpg'
          alt=''
        />
        <div className='home_row'>
          <Product />
          <Product />
        </div>
        <div className='home_row'>
          <Product />
          <Product />
          <Product />
        </div>
        <div className='home_row'>{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
