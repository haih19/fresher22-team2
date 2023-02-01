import tmdbConfigs from './tmdb.configs'
import {API_KEY} from '../constants/apiPath'
import publicRequest from '../helpers/request.public'
import queryString from 'query-string'

const guestService = {
   getMovieList: (type, params) => {
      const url =
         'movie/' +
         tmdbConfigs.movieType[type] +
         `?api_key=${API_KEY}` +
         queryString.stringify(params)

      return publicRequest.get(url)
   },
}

export default guestService
