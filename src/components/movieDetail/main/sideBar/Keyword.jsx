import React from 'react'
import './sideBarMovieDetail.scss'

export default function Keyword({name, href}) {
  return (
    <a className='keyword-item' href={href}>
                {name}
    </a>
  )
}
