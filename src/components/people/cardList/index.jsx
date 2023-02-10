import './cardList.scss'
import {Link} from 'react-router-dom'
import tmdbService from '../../../services/tmdb.service'
import {memo} from 'react'

function CardSlide(props) {
   return (
      <div className="card-list">
         <div className="card-list__title">
            <h3 style={{fontWeight: 600, fontSize: '1.3em'}}>Known For</h3>
         </div>
         <ul className="card-list__scroll">
            {props.movieCredits &&
               props.movieCredits.slice(0, 9).map((item, index) => (
                  <li
                     key={index}
                     className="card-list__scroll__item">
                     <div className="card-list__scroll__item__img">
                        <Link to={`/movie/${item.id}`}>
                           <img
                              src={
                                 tmdbService.posterPath(
                                    'w500',
                                    item.poster_path || item.backdrop_path
                                 )
                                    ? tmdbService.posterPath('w500', item.poster_path)
                                    : null
                              }
                              alt=""
                           />
                        </Link>
                     </div>
                     <div className="card-list__scroll__item__title">{item.title}</div>
                  </li>
               ))}
         </ul>
      </div>
   )
}

export default memo(CardSlide)
