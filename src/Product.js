import React from 'react';
import './Product.css';

function Product({ title, price, rating, image }) {
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <strong>{price}</strong>
          <small>Rs</small>
        </p>
        <div className='product__rating'>
          <p>{rating}</p>
        </div>
      </div>

      <img src={image} alt='' />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
