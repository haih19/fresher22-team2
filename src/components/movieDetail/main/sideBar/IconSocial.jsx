import React from 'react'
import './sideBarMovieDetail.scss'


export default function IconSocial({background}) {
  return (
    <div className='cdIcon'>
        <a
            className='cdIcon__link'
            title="Visit Facebook"
            href="https://www.facebook.com/Pussinboots"
            target="_blank"
            rel="noopener noreferrer"
            data-role="tooltip"
        >
            <span className='cdIcon__icon' style={{ backgroundImage: `url(${background})` }}></span>
        </a>
    </div>
  )
}
