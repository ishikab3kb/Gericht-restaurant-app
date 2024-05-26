import React from 'react'
import { SubHeading } from '../../components'
import './findUs.css'
import { findus } from '../../constants/images'

const FindUs = () => {
  return (
    <div className='app__findus app__wrapper section__padding app__bg'>
      <div className='app__findus-content'>
        <SubHeading title='Contact'></SubHeading>
        <h2 className='headtext__cormorant'>Find Us</h2>
        <p className='app__findus-address p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
        <p className='app__findus-openingTime p__cormorant'>Opening Hours</p>
        <p className='app__findus-time p__opensans'>Mon - Fri: 10:00 Am - 02:00 Am</p>
        <p className='app__findus-time p__opensans'>Sat - Sun: 10:00 Am - 03:00 Am</p>
        <button className='custom__button'>Visit Us</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={findus} alt='findus'></img>
      </div>
    </div>
  )
}

export default FindUs
