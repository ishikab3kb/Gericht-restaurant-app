import React, { useRef } from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { gallery01, gallery02, gallery03, gallery04 } from '../../constants/images'
import './gallery.css'


const Gallery = () => {

  const gallery_img = [gallery01,gallery02,gallery03,gallery04];

  const scrollref = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollref;
    if(direction==='left')
    {
      current.scrollLeft -= 300;
    }
    else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram'></SubHeading>
        <h2 className='headtext__cormorant'>Photo Gallery</h2>
        <p className='p__opensans' style={{ color: '#AAAAAA'}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
        <button className='custom__button'> View More</button>
      </div>
      <div className='app__gallery-carousel'>
        <div className='app__gallery-carousel-images_container' ref={scrollref}>
          {gallery_img.map((image,index) => (
            <div className='app__gallery-image_card flex__center' key={`gallery_0${index+1}`}>
              <img src={image} alt='gallery'></img>
              <BsInstagram className='gallery__image-icon'></BsInstagram>
            </div>
          ))}
        </div>
        <div className='app__gallery-carousel-image_arrows'>
          <BsArrowLeftShort className='gallery_arrow-icon' onClick={() => scroll('left')}></BsArrowLeftShort>
          <BsArrowRightShort className='gallery_arrow-icon' onClick={() => scroll('right')}></BsArrowRightShort>
        </div>
      </div>
    </div>
  )
}

export default Gallery
