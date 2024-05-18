import React, { useState } from 'react'
import images from '../../constants/images'
import {GiHamburgerMenu} from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './navbar.css'

const Navbar = () => {

  const [toggleMenu,setToggleMenu]=useState(false)

  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='gericht'></img>
      </div>
      <div className='app__navbar-links'>
        <ul>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#awards'>Awards</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      <div className='app__navbar-login-book'>
        <div><a href='#login' className='p__opensans'>Log In / Registration</a></div>
        <div className='app__navbar-login-book_separator'></div>
        <div><a href='/' className='p__opensans'>Book Table</a></div>
      </div>


      {/* <div className='app__navbar-dropdown_menu slide-bottom'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu &&
        <div className='app__navbar-smallscreen_overlay section__padding'>
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close headtext__cormorant" onClick={() => setToggleMenu(false)} />
          <ul className='headtext__cormorant'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='#awards'>Awards</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>}
      </div> */}

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}></GiHamburgerMenu>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}></MdOutlineRestaurantMenu>
            <ul className='app__navbar-smallscreen-links'>
              <li><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href='#about' onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href='#menu' onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href='#awards' onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
