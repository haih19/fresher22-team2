import React from 'react'
import './contentMovieDetail.scss'

export default function LinkContent({href, title}) {
   return (
      <p className="cast__link">
         <a
            className=""
            href={href}>
            {title}
         </a>
      </p>
   )
}
