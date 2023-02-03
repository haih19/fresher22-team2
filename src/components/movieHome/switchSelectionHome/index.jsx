import './switchSelectionHome.scss'
import React from 'react'
import SwitchSection from './switchSection'

const SwitchSelectionHome = ({ tiltle, items, bgCover}) => {
  return (
    <section className='sectionHome'>
      <div className='sectionHome__wrap'>
        <h2>{tiltle}</h2>
        <SwitchSection items={items} bgCover ={bgCover}/>
      </div>
    </section>

  )
}

export default SwitchSelectionHome