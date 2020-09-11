import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/HeroPC_1500x600_1._CB406681336_.jpg'
          alt=''
        />
        <div className='home_row'>
          <Product />
          <Product />
        </div>
        <div className='home_row'>
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className='home_row'>{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
