import React from 'react'
import './mainMovieDetail.scss'
import ContentMovieDetail from './content'
import SideBarMovieDetail from './sideBar'

export default function MainMovieDetail({id}) {
  return (
    <div className='main'>
        <ContentMovieDetail id={id} />
        <SideBarMovieDetail />
    </div>
  )
}
