import React from 'react'
import images from '../../constants/images'
import './aboutUs.css'
// import { SubHeading } from '../../components'

const AboutUs = () => {
  return (
    <div className='app__aboutus section__padding flex__center app__bg' id='about'>
      <div className='app__aboutus_underlay-image flex__center'>
        <img src={images.G} alt='G'></img>
      </div>
      <div className='app__aboutus-content'>
        <div className='app__aboutus-content-left'>
          <h2 className='headtext__cormorant'>About Us</h2>
          <img src={images.spoon} alt='spoon'></img>
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.</p>
          <button type='button' className='custom__button '>Know More</button>
        </div>
        <div className='app__aboutus-content-image'>
          <img src={images.knife} alt='knife'></img>
        </div>
        <div className='app__aboutus-content-right'>
          <h2 className='headtext__cormorant'>Our History</h2>
          <img src={images.spoon} alt='spoon'></img>
          <p className='p__opensans'>Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat. Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed Odio Nec Aliquet.</p>
          <button type='button' className='custom__button '>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
