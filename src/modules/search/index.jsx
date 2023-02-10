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
import queryString from 'query-string'
import './searchModule.scss'

function SearchModule() {
   const location = useLocation()
   const [, setSearchTxt] = useState('')
   const {type} = useParams()
   const [totalResult, setTotalResult] = useState([])
   const [data, setData] = useState()

   // const [people, setPeople] = useState()

   const {
      data: moviesData,
      error: moviesError,
      isLoading: isLoadingMovies,
      fetch: searchMovies,
   } = useFetch(tmdbService.search)

   const {
      data: peopleData,
      error: peopleError,
      isLoading: isLoadingPeople,
      fetch: searchPeople,
   } = useFetch(tmdbService.search)

   const handleInputSearch = (txt) => {
      setSearchTxt(txt)
   }

   const handleSearch = () => {
      searchMovies('movie', searchToObject(location.search))
      searchPeople('person', searchToObject(location.search))
   }

   const fetchData = async () => {
      try {
         // ['Movies', 'TV Shows', 'Keywords', 'People', 'Collections', 'Network']
         const res = await tmdbService.search(
            type === 'person' ? 'person' : type === 'movie' ? 'movie' : 'tv',
            queryString.parse(location.search)
         )
         console.log('check res: ', res)
         setData({...data, ...res})
      } catch (error) {
         console.log(error)
      }
   }

   const fetchTotalData = async () => {
      try {
         const result = await Promise.all([
            tmdbService.search('movie', queryString.parse(location.search)),
            tmdbService.search('tv', queryString.parse(location.search)),
            tmdbService.search('keyword', queryString.parse(location.search)),
            tmdbService.search('person', queryString.parse(location.search)),
            tmdbService.search('collection', queryString.parse(location.search)),
            tmdbService.search('company', queryString.parse(location.search)),
         ])
         const finalResult = result.map((item) => item.total_results)
         setTotalResult(finalResult)
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      fetchTotalData()
      searchMovies('movie', searchToObject(location.search))
      searchPeople('person', searchToObject(location.search))
      fetchData()
   }, [location, type])
   // console.log('check people: ', people)
   //
   console.log('type: ', type)

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
            <SearchFilter total={totalResult && totalResult} />
            {data === undefined || data === null ? (
               <NotFound />
            ) : type === 'movie' || type === 'person' ? (
               <SearchContent content={data} />
            ) : (
               <NotFound />
            )}
         </div>
      </div>
   )
}

export default SearchModule
