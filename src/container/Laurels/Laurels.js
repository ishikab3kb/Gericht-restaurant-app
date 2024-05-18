import React from 'react'
import {SubHeading} from '../../components'
import { images, data} from '../../constants'
import './laurels.css'

const AwardCard = ({award}) => (
  <div className='app__laurels-content_awards-card'>
    <img src={award.imgUrl} alt='award'></img>
      <div className='app__laurels-content_awards-award_content'>
        <p className='p__cormorant'>{award.title}</p>
        <p className='p__opensans'>{award.subtitle}</p>
      </div>
  </div>
)

const Laurels = () => {
  return (
    <div className='app__wrapper app__bg section__padding' id='awards'>
      <div className='app__laurels-content'>
        <SubHeading title="Awards & Recognition"></SubHeading>
        <h2 className='headtext__cormorant'>Our Laurels</h2>
        <div className='app__laurels-content_awards'>
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title}></AwardCard>
          ))}
        </div>
      </div>
      <div className='app__laurels-image app__wrapper_img '>
        <img src={images.laurels} alt='food'></img>
      </div>
    </div>
  )
}

export default Laurels
