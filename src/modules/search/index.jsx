import {type} from '@testing-library/user-event/dist/type'
import {useCallback, useEffect, useState} from 'react'
import {useLocation, useParams, useSearchParams} from 'react-router-dom'
import InputSearch from '../../components/search/inputSearch'
import {getPathname, searchToObject} from '../../helpers/param'
import useFetch from '../../hooks/useFetch'
import tmdbConfigs from '../../services/tmdb.configs'
import tmdbService from '../../services/tmdb.service'
import SearchContent from './content'
import SearchFilter from './filters'
import NotFound from './notFound'
import './searchModule.scss'

function SearchModule() {
   const location = useLocation()
   const [searchTxt, setSearchTxt] = useState('')
   const [page, setPage] = useState(1)
   const {type} = useParams()

   // const [people, setPeople] = useState()

   const {
      data: movies,
      error: moviesError,
      isLoading: isLoadingMovies,
      fetch: searchMovies,
   } = useFetch(tmdbService.search)

   const {
      data: people,
      error: peopleError,
      isLoading: isLoadingPeople,
      fetch: searchPeople,
   } = useFetch(tmdbService.search)

   const handleInputSearch = (txt) => {
      setSearchTxt(txt)
   }

   const handleSearch = () => {
      searchMovies('movie', searchToObject(location.search))
      searchPeople('people', searchToObject(location.search))
   }

   useEffect(() => {
      searchMovies('movie', searchToObject(location.search))
      searchPeople('people', searchToObject(location.search))
   }, [searchToObject(location.search).page])

   return (
      <div className="search-module ">
         <div className="search-module__input-search">
            <InputSearch
               onClick={handleSearch}
               // onKeyDown={handleSearch}
               onChange={handleInputSearch}
            />
         </div>
         <div className="search-module__body container">
            <SearchFilter
               total={
                  movies && people && [movies.total_results, 0, 0, people.total_results, 0, 0]
               }
            />
            <SearchContent content={type === 'movie' ? movies : people} />
            {/* <NotFound /> */}
         </div>
      </div>
   )
}

export default SearchModule
