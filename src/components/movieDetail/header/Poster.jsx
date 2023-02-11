import React from 'react'
import './headerMovieDetail.scss'
import tmdbService from '../../../services/tmdb.service'

export default function Poster({pathImg, title}) {
   return (
      <div className="poster">
         <div className="poster__image">
            <img
               className="poster__img"
               src={`${tmdbService.poster('w500', pathImg)}`}
               alt={title}
            />
         </div>
      </div>
   )
}
