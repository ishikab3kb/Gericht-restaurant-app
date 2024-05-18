import React from 'react'
import images from '../../constants/images'
import { FooterOverlay, Newsletter, SubHeading } from '../../components'
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import './footer.css'


const Footer = () => {
  return (
    <div className='app__footer app__bg section__padding' id='contact'>
      <FooterOverlay></FooterOverlay>
      <Newsletter></Newsletter>

      <div className='app__footer-cols'>
        <div className='app__footer-contactus'>
          <h3 className='app__footer-headtext'>Contact Us</h3>
          <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
          <p className='p__opensans'>+1 212-344-1230</p>
          <p className='p__opensans'>+1 212-555-1230</p>
        </div>
        <div className='app__footer-name'>
          <img src={images.gericht} alt='gericht'></img>
          <SubHeading title='"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."'></SubHeading>
          <div className='app__footer-socialmedia'>
            <FiFacebook className='icon'></FiFacebook>
            <FiTwitter className='icon'></FiTwitter>
            <FiInstagram className='icon'></FiInstagram>
          </div>
        </div>
        <div className='app__footer-working'>
          <h3 className='app__footer-headtext'>Working Hours</h3>
          <div>
            <p className='p__opensans'>Monday-Friday:</p>
            <p className='p__opensans'>08:00 Am - 12:00 Am</p>
          </div>
          <div>
            <p className='p__opensans'>Saturday-Sunday:</p>
            <p className='p__opensans'>07:00 Am - 11:00 Pm</p>
          </div>
        </div>
      </div>
      <p className='app__footer-rights p__opensans'>2021 Gericht. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
