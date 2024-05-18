import React from 'react'
import './menuItem.css'

const MenuItem = ({itemName,itemInfo,itemPrice}) => {
  return (
    <div className='app__menuitem'>
      <div className='app__menuitem_name'>
        <div className='app__menuitem-name'>
        <p className='p__cormorant app__menuitem-name-name'>{itemName}</p> 
        </div>
        <div className='app__menuitem-price'>
          <div className='app__menuitem-price-dash'></div>
          <p className='p__cormorant'>{itemPrice}</p>
        </div>
      </div>
      <div className='app__menuitem_info'>
        <p className='p__opensans app__menuitem-name-info'>{itemInfo}</p>
      </div>
    </div>
  )
}

export default MenuItem
