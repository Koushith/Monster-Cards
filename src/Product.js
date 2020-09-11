import React from 'react';
import './Product.css';
function Product() {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>The lean Startup</p>
        <p className='product__price'>
          <strong>600</strong>
          <small>Rs</small>
        </p>
        <div className='product__rating'>
          <p>🌟</p>
        </div>
      </div>

      <img
        src='https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg'
        alt=''
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
