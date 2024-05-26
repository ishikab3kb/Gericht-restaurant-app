import React from 'react'
import './chef.css'
import { SubHeading } from '../../components'
import { chef, quote, sign } from '../../constants/images'

const Chef = () => {
  return (
    <div className='app__chef app__bg section__padding flex__center'>
      <div className='app__chef-image'>
        <img src={chef} alt="Chef"></img>
      </div>
      <div className='app__chef-chefswords'>
        <SubHeading title="Chef's Word"></SubHeading>
        <h2 className='headtext__cormorant'>What We Believe In</h2>
        <div className='app__chef-chefswords_para'>
          <div className='app__chef-chefswords_para-img'>
            <img src={quote} alt='quote'></img>
            <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit.</p>
          </div>
          <p className='p__opensans'>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
        </div>
        <div className='app__chef-chefswords_name'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
        </div>
        <div className='app__chef-chefswords_sign'>
          <img src={sign} alt="Chef's Sign"></img>
        </div>
      </div>
    </div>
  )
}

export default Chef
