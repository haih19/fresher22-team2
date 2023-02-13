import './header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faBell, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

import React from 'react'
function Header() {
   const img =
      'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
   return (
      <nav className="nav-bar">
         <ul className="nav-bar__left">
            <li>
               <Link to="/">
                  <img
                     src={img}
                     className="img"
                     alt=""
                  />
               </Link>
            </li>
            <li>Movie</li>
            <li>TV Shows</li>
            <li>People</li>
            <li>More</li>
         </ul>
         <ul className="nav-bar__right">
            <li>
               <FontAwesomeIcon icon={faPlus} />
            </li>
            <li>VI</li>
            <li>
               <FontAwesomeIcon icon={faBell} />
            </li>
            <li>
               <span className="ava">l</span>
            </li>
            <li>
               <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
         </ul>
      </nav>
   )
}

export default Header
