import React from 'react'
import './sideBarMovieDetail.scss'

export default function LeaderTop() {
   return (
      <div className="leader-item">
         <div className="avatar">
            <a href="/u/Fougasse">
               <img
                  loading="lazy"
                  className="avatar-img"
                  src="https://www.themoviedb.org/t/p/w45_and_h45_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"
                  alt="Fougasse"
               />
            </a>
         </div>
         <div className="info">
            <p className="edit_count">66</p>
            <p>
               <a
                  className="edit_name"
                  href="/u/Fougasse">
                  Fougasse
               </a>
            </p>
         </div>
      </div>
   )
}
