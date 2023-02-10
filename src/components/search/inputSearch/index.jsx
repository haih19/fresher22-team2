import queryString from 'query-string'
import {useRef, useState} from 'react'
import {useLocation, useSearchParams} from 'react-router-dom'
import {searchToObject} from '../../../helpers/param'
import './inputSearch.scss'

function InputSearch(props) {
   const location = useLocation()
   const [searchTxt, setSearchText] = useState(queryString.parse(location.search).query || '')
   const [, setSearchParam] = useSearchParams({query: '', page: 1})
   const inputRef = useRef(null)
   const handleOnchangeSearch = (e) => {
      setSearchText(e.target.value)
      // props.onChange(e.target.value)
   }

   const handleSearch = () => {
      setSearchParam({query: searchToObject(location.search).query, page: 1})
      setSearchParam({query: searchTxt, page: 1})
      props.onClick()
   }

   return (
      <div className="input-search container">
         <div
            className="input-search__item-left"
            onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
         </div>
         <div className="input-search__item-central">
            <input
               ref={inputRef}
               value={searchTxt}
               onChange={handleOnchangeSearch}
               type="text"
               placeholder="Search for a movie, tv show, person..."
            />
         </div>
         <div className="input-search__item-right">
            <i className="fa-solid fa-xmark"></i>
         </div>
      </div>
   )
}

export default InputSearch
