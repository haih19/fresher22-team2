import {useEffect} from 'react'
import {Link, useLocation, useNavigate, useParams} from 'react-router-dom'
import {removeSuffixS, searchToObject, removeSpace} from '../../../helpers/param'
import './filters.scss'

const compare = (a, b) => {
   if (a === b) {
      return true
   }
   return false
}
const filterList = ['Movies', 'TV Shows', 'Keywords', 'People', 'Collections', 'Network']
function SearchFilter(props) {
   const location = useLocation()
   const {type} = useParams()

   return (
      <div className="search-filter">
         <div className="search-filter__panel">
            <div className="search-filter__panel__title">
               <h3>Search Results</h3>
            </div>
            <div className="search-filter__panel__body">
               {filterList.map((item, index) => (
                  <Link
                     to={`/search/${removeSuffixS(removeSpace(item)).toLowerCase()}?query=${
                        searchToObject(location.search).query
                     }&page=${searchToObject(location.search).page}`}
                     key={index}
                     className={`search-filter__panel__body__item ${
                        compare(type, removeSuffixS(item).toLowerCase()) ? 'active' : ''
                     }`}>
                     <div className="search-filter__panel__body__item__left">{item}</div>
                     <div className="search-filter__panel__body__item__right">{}</div>
                  </Link>
               ))}
            </div>
         </div>
         <div className="search-filter__tips">
            <p className="search-filter__tips__txt">
               <span>
                  <i className="fa-solid fa-circle-info"></i>
               </span>
               Tip: You can use the 'y:' filter to narrow your results by year. Example: 'star
               wars y:1977'.
            </p>
         </div>
      </div>
   )
}

export default SearchFilter
