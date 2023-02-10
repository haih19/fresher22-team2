import tmdbConfigs from './tmdb.configs'
import request from '../helpers/request'
import queryString from 'query-string'

const api_key = process.env.REACT_APP_API_KEY

const getTrendingList = (type, params) => {
   const url = `trending/${type}/${params.time_window}?api_key=${api_key}`
   return request.get(url)
}

const getPopularTv = (type) => {
   const url = `${type}/popular?api_key=${api_key}&language=en-US&page=1`
   return request.get(url)
}

const getMovieList = (type, params) => {
   const url =
      'movie/' +
      tmdbConfigs.movieType[type] +
      `?api_key=${api_key}` +
      queryString.stringify(params)

   return request.get(url)
}

const getVideos = (cate, id) => {
   const url =
      tmdbConfigs.category[cate] + `/${id}/videos?api_key=${api_key}&append_to_response=videos`
   return request.get(url)
}

// const getVideos = (cate, id) => {
//    const url = tmdbConfigs.category[cate] + `/${id}/videos?api_key=${api_key}`
//    return request.get(url)
// }

const search = (cate, params) => {
   const url =
      `search/${cate}?api_key=${api_key}&language=en-US&` + queryString.stringify(params)

   return request.get(url)
}

// detail person, movie
const detail = (type, id) => {
   const url = `${type}/${id}?api_key=${api_key}`
   return request.get(url)
}

// const credits = (cate, id) => {
//    const url = tmdbConfigs.category[cate] + '/' + id + `/credits?api_key=${api_key}`
//    return request.get(url)
// }

const credits = (cate, id) => {
   const url = tmdbConfigs.category[cate] + '/' + id + `/credits?api_key=${api_key}`
   return request.get(url)
}
// person => movie credits
const personMediaCredits = (cate, id) => {
   const url = `person/${id}/${cate}?api_key=${api_key}`
   return request.get(url)
}

const similar = (cate, id) => {
   const url = tmdbConfigs.category[cate] + '/' + id + `/similar?api_key=${api_key}`
   return request.get(url)
}
const backdropPath = (imgEndPoint) => `https://image.tmdb.org/t/p/original${imgEndPoint}`
const posterPath = (posterEndPoint) => `https://image.tmdb.org/t/p/w500/${posterEndPoint}`
const searchImage = (endPoint) =>
   `https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${endPoint}`

const poster = (type, endpoint) => `https://image.tmdb.org/t/p/${type}${endpoint}`

const trailerPath = (videoId) => `https://www.youtube.com/embed/${videoId}`

const tmdbService = {
   getTrendingList,
   getMovieList,
   posterPath,
   getPopularTv,
   backdropPath,
   detail,
   personMediaCredits,
   poster,
   search,
   searchImage,
   getVideos,
   trailerPath,
   trailerPath,
   getVideos,
}

export default tmdbService
