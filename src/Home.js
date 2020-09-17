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
          <Product
            id='123'
            title='The Lean Startup'
            image='https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg'
            rating={5}
            price='650'
          />

          <Product
            id='124'
            title='The Lean'
            image='https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg'
            rating={4}
            price='650'
          />

          <Product />
        </div>
        <div className='home_row'>
          <Product
            id='5487'
            title='The Lean'
            image='https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg'
            rating={4}
            price='650'
          />
          <Product
            id='655'
            title='The Lean'
            image='https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg'
            rating={4}
            price='650'
          />
          <Product
            id='655'
            title='The Lean'
            image='https://images-na.ssl-images-amazon.com/images/I/41Um2UPO1yL._SX325_BO1,204,203,200_.jpg'
            rating={4}
            price='650'
          />
        </div>
        <div className='home_row'>{/* Product */}</div>
      </div>
    </div>
  );
}

export default Home;
