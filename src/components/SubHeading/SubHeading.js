import React from 'react'
import images from '../../constants/images'


const SubHeading = ({title}) => {
  return (
    <div className='app__subheading'>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} className='spoon__img' alt='spoon'></img>
    </div>
  )
}

export default SubHeading
