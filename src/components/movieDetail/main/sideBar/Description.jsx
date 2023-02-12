import React from 'react'
import './sideBarMovieDetail.scss'

export default function Description({header, description}) {
   return (
      <p className="cdDescription">
         <strong className="cdDescription__strong">{header}</strong>
         {description}
      </p>
   )
}
