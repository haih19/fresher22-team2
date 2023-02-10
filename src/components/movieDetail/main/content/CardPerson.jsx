import React from 'react'
import { Link } from 'react-router-dom'
import tmdbService from '../../../../services/tmdb.service'
import './contentMovieDetail.scss'

export default function CardPerson({item}) {
  // console.log('item', item)
  const img_err = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'

  return (
    <div className="card-item">
      <Link to='/'>
        <img src={item.profile_path ? tmdbService.poster('w500', item.profile_path) : img_err} alt={item.name} className="card-img" />
      </Link>
      <div className="card-body">
          <h4 className="card-name"><a href="/person/3131-antonio-banderas">{item.name}</a></h4>
          <p className="card-desc">{item.character}</p>
      </div>
  </div>
  )
}
