import React from 'react';
import Subtotal from './subtotal';
import './checkout.css';

function checkout() {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/BFL/unknown_aw-BFL_Amazon_Page_Banner_1500px300x.gif'
          alt='checkout as'
        />
        <div>
          <h2 className='checkout__title'>Your Shopping Basket</h2>
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
}

export default checkout;
