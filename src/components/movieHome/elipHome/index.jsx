import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
const ElipHome = () => {
  return (
    <div className='elip__wrap'>
      <span  className='elip__wrap__icon'>
        <FontAwesomeIcon icon = {faCircle} className = 'icon'/>
        <FontAwesomeIcon icon = {faCircle} className = 'icon'/>
        <FontAwesomeIcon icon = {faCircle} className = 'icon'/>
      </span>
    </div>
  )
}

export default ElipHome