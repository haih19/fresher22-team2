import React from 'react'
import './contentMovieDetail.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookmark, faCalendarDays, faHeart, faStar} from '@fortawesome/free-solid-svg-icons'

export default function Recommendation() {
   return (
      <div className="recommendation-item">
         <div className="recommendation-img">
            <a href="/person/3131-antonio-banderas">
               <img
                  src="https://www.themoviedb.org/t/p/w250_and_h141_face/w1mBhslq3Fx5n9RV331ySlsWBzM.jpg"
                  alt="hihi"
                  className="recommendation-img"
               />
            </a>
            <div className="recommendation-img__date">
               <p>
                  <FontAwesomeIcon icon={faCalendarDays} /> 12/08/2022
               </p>
               <p>
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faBookmark} />
                  <FontAwesomeIcon icon={faStar} />
               </p>
            </div>
         </div>
         <div className="recommendation-body">
            <p>Tere Naam</p>
            <p>65%</p>
         </div>
      </div>
   )
}
