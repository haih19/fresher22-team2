import React, { useState } from 'react'
import SwitchSelectionHome from '../../switchSelectionHome'
import CardHomeList from './cardTrendHomeList'
import '../contentHome.scss'
const ListTrendingHome = () => {
  //const [callApiHome, setCallApiHome] = useState([])
  const [sectionOnToggle, setSectionOnToggle] = useState({
    first: 'Today',
    second: 'Today',
    third: 'today'
  })
  const handleToggle = (section, selectedValue) => {
    setSectionOnToggle(prev => (
      {
          ...prev,
          [section]: selectedValue
      }
    ))
  }
  return (
    <div className='trending-wrap-home bgtrend-home'>
      <SwitchSelectionHome 
        tiltle='Trending'
        colorTiltle = ''
        items={['Today', 'This Week']}
        onToggle={handleToggle.bind(null,'first')}
        isToggle={sectionOnToggle.first === 'Today' ? false : true}
        styleSwitch = {['', '', '']}
      />
      <CardHomeList fetch = {sectionOnToggle.first}/>
    </div>
  )
}

export default ListTrendingHome