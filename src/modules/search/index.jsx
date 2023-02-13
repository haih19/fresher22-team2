import {useEffect, useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'
import InputSearch from '../../components/search/inputSearch'
import {searchToObject} from '../../helpers/param'
import useFetch from '../../hooks/useFetch'
import tmdbService from '../../services/tmdb.service'
import SearchContent from './content'
import SearchFilter from './filters'
import NotFound from './notFound'
import queryString from 'query-string'
import './searchModule.scss'
import SkeletonCard from '../../components/search/skeletonContent'

function SearchModule() {
   const location = useLocation()
   const [, setSearchTxt] = useState('')
   const {type} = useParams()
   const [totalResult, setTotalResult] = useState([])
   const [data, setData] = useState()

   const {fetch: searchMovies} = useFetch(tmdbService.search)

   const {fetch: searchPeople} = useFetch(tmdbService.search)

   const handleInputSearch = (txt) => {
      setSearchTxt(txt)
   }

   const handleSearch = () => {
      searchMovies('movie', searchToObject(location.search))
      searchPeople('person', searchToObject(location.search))
   }

   const fetchData = async () => {
      try {
         const res = await tmdbService.search(
            type === 'person' ? 'person' : type === 'movie' ? 'movie' : 'tv',
            queryString.parse(location.search)
         )
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location, type])

   return (
      <div className="search-module ">
         <div className="search-module__input-search">
            <InputSearch
               onClick={handleSearch}
               onChange={handleInputSearch}
            />
         </div>
         <div className="search-module__body container">
            <SearchFilter total={totalResult && totalResult} />
            {data === undefined || data === null ? (
               [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => <SkeletonCard key={item} />)
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
