import './searchCard.scss'
import {Link} from 'react-router-dom'
import tmdbService from '../../../services/tmdb.service'
import moment from 'moment'

function SearchCard(props) {
   const item = props.item
   // console.log('check item', item)
   return (
      <div className="search-card">
         <div className="search-card__image">
            <Link to="/">
               <img
                  src={tmdbService.searchImage(item.backdrop_path || item.drop_path)}
                  alt=""
               />
            </Link>
         </div>
         <div className="search-card__info">
            <div className="search-card__info__head">
               <div className="search-card__info__head__title">
                  <Link to="/">
                     <h2>{item.title}</h2>
                  </Link>
               </div>
               <div
                  className="search-card__info__head__date"
                  style={{display: 'block'}}>
                  {moment(item.release_date || item.first_air_date).format('MMMM DD YYYY')}
               </div>
            </div>
            <div className="search-card__info__overview">
               <p>{item.overview}</p>
            </div>
         </div>
      </div>
   )
}

export default SearchCard
