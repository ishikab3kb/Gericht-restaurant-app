import React from 'react'
import { MenuItem, SubHeading } from '../../components'
import {data} from '../../constants'
import './specialMenu.css'
import { menu } from '../../constants/images'

const SpecialMenu = () => {
  return (
    <div className='app__menu section__padding flex__center' id='menu'>
      <SubHeading title='Menu That Fits Your Palatte'></SubHeading>
      <h1 className='headtext__cormorant'>Today's Special</h1>
      <div className='app__menu-items'>
        <div className='app__menu-items-wine-beer flex__center'>
          <h2>Wine & Beer</h2>
          <div className='app__menu-items-wine-beer-itemlist'>
            {data.wines.map((wine,index) => (
              <MenuItem key={wine.title+index} itemName={wine.title} itemInfo={wine.tags} itemPrice={wine.price}></MenuItem>
            ))}
          </div>
          {/* <MenuItem itemName='Chapel Hill Shiraz' itemInfo='AU | Bottle' itemPrice='$56'></MenuItem>
          <MenuItem itemName='Catena Malbee' itemInfo='AU | Bottle' itemPrice='$59'></MenuItem>
          <MenuItem itemName='La Vieillw Rose' itemInfo='FR | 750 Ml' itemPrice='$44'></MenuItem>
          <MenuItem itemName='Rhino Pale Ale' itemInfo='CA | 750 Ml' itemPrice='$31'></MenuItem>
          <MenuItem itemName='Irish Guinness' itemInfo='IE | 750 Ml' itemPrice='$26'></MenuItem> */}
        </div>
        <div className='app__menu-items-image'>
          <img  src={menu} alt='bar'></img>
        </div>
        <div className='app__menu-items-cocktails'>
          <h2>Cocktails</h2>
          <div className='app__menu-items-wine-beer-itemlist'>
            {data.cocktails.map((cocktail,index) => (
              <MenuItem key={cocktail.title+index} itemName={cocktail.title} itemInfo={cocktail.tags} itemPrice={cocktail.price}></MenuItem>
            ))}
          </div>
          {/* <MenuItem itemName='Aperol Sprtiz' itemInfo='Aperol | Villa Marchesi Prosecco | Soda | 30 Ml' itemPrice='$20'></MenuItem>
          <MenuItem itemName="Dark 'N' Stormy" itemInfo='Dark Rum | Ginger Beer | Slice Of Lime' itemPrice='$16'></MenuItem>
          <MenuItem itemName='Daiquiri' itemInfo='Rum | Citrus Juice | Sugar' itemPrice='$10'></MenuItem>
          <MenuItem itemName='Old Fashioned' itemInfo='Bourbon | Brown Sugar | Angostura Bitters' itemPrice='$31'></MenuItem>
          <MenuItem itemName='Negroni' itemInfo='Gin | Sweet Vermouth | Campari | Orange Garnish' itemPrice='$26'></MenuItem> */}
        </div>
      </div>
      <button type='button' className='custom__button app__menu-button'>View More</button>
    </div>
  )
}

export default SpecialMenu
