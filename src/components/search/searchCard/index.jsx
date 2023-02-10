import './searchCard.scss'
import {Link, useParams} from 'react-router-dom'
import tmdbService from '../../../services/tmdb.service'
import moment from 'moment'

function SearchCard(props) {
   const {type} = useParams()
   const item = props.item
   return (
      <div className="search-card">
         <div className="search-card__image">
            <Link to="/">
               <img
                  src={
                     type === 'movie'
                        ? tmdbService.poster(
                             'w94_and_h141_bestv2',
                             item.backdrop_path || item.drop_path || item.profile_path
                          )
                        : tmdbService.poster(
                             'w94_and_h141_bestv2',
                             item.profile_path || item.drop_path || item.backdrop_path
                          )
                  }
                  alt=""
               />
            </Link>
         </div>
         <div className="search-card__info">
            <div className="search-card__info__head">
               <div className="search-card__info__head__title">
                  <Link to="/">
                     <h2>{item.title || item.name}</h2>
                  </Link>
               </div>
               <div
                  className="search-card__info__head__date"
                  style={{display: 'block'}}>
                  {type === 'movie'
                     ? moment(item.release_date || item.first_air_date).format('MMMM DD YYYY')
                     : item.known_for_department}
               </div>
            </div>
            <div className="search-card__info__overview">
               <p>{type === 'movie' ? item.overview : ''}</p>
            </div>
         </div>
      </div>
   )
}

export default SearchCard
