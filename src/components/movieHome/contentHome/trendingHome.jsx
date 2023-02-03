import React from 'react'
import SwitchSelectionHome from '../switchSelectionHome'
import CardHomeList from './cardHomeList'
import './contentHome.scss'
const TrendingHome = () => {
  return (
    <div className='trending-wrap-home'>
        <SwitchSelectionHome tiltle='Trending' items = {['Today','This Week']}/>
        <CardHomeList/>
    </div>
  )
}

export default TrendingHome