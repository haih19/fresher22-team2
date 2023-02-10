import './switchSelectionHome.scss'
import React from 'react'
import SwitchSection from './switchSection'


const SwitchSelectionHome = ({ colorTiltle, tiltle, ...props}) => {
  return (
    <section className='sectionHome'>
      <div className='sectionHome__wrap'>
        <h2 style={{color:`${colorTiltle}`}}>{tiltle}</h2>
        <SwitchSection {...props}/>
      </div>
    </section>

  )
}

export default SwitchSelectionHome