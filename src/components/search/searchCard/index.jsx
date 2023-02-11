import './searchCard.scss'
import {Link, useParams} from 'react-router-dom'
import tmdbService from '../../../services/tmdb.service'
import moment from 'moment'

function SearchCard(props) {
   const {type} = useParams()
   const item = props.item
   console.log('check item: ', item)
   return (
      <div className="search-card">
         <div className="search-card__image">
            <Link to={item && type === 'movie' ? `/movie/${item.id}` : `/person/${item.id}`}>
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
                  <Link
                     to={
                        item && type === 'movie' ? `/movie/${item.id}` : `/person/${item.id}`
                     }>
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
