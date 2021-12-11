import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Some Fantasy Destinations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Ha Long Bay'
              label='Natural'
              path='/services'
            />
            <CardItem
              src='images/img-11.jpg'
              text='Hoi An Ancient Town'
              label='Old'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-12.jpg'
              text='Nha Trang Beach'
              label='Beach'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Da Nang City - A Worth-Living City In Viet Nam'
              label='Fantasy City'
              path='/products'
            />
            <CardItem
              src='images/img-13.jpg'
              text='Mui Ne Sand Dunes'
              label='Natural'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
