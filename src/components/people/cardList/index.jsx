import './cardList.scss'
import {Link} from 'react-router-dom'
import tmdbService from '../../../services/tmdb.service'

function CardSlide(props) {
   return (
      <div className="card-list">
         <ul className="card-list__scroll">
            {props.credits &&
               props.credits.slice(0, 9).map((item, index) => (
                  <li
                     key={index}
                     className="card-list__scroll__item">
                     <div className="card-list__scroll__item__img">
                        <Link to={`/movie/${item.id}`}>
                           <img
                              src={
                                 tmdbService.posterPath(item.poster_path || item.backdrop_path)
                                    ? tmdbService.posterPath(item.poster_path)
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

export default CardSlide
