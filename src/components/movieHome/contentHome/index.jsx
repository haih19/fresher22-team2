import React from 'react'
import LeaderBoard from '../leaderBoard'
import './contentHome.scss'
import ListPopularHome from './listPopularHome'
import ListTrendingHome from './listTrendingHome'
import ReviewVideoHome from './reviewVideoHome'
const ContentHome = () => {
  return (
    <div className='content-home'>
       <ListTrendingHome/>
       <ReviewVideoHome/>
       <ListPopularHome/>
       <LeaderBoard/>
    </div>
  )
}

export default ContentHome