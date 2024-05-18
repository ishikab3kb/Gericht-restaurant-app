import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <SubHeading title='Newsletter'></SubHeading>
      <h2 className='headtext__cormorant'>Subscribe To Our Newsletter</h2>
      <p className='p__opensans'>And Never Miss Latest Updates!</p>
      <div className='details'>
        <input placeholder='Enter your email address'></input>
        <button className='custom__button'>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
