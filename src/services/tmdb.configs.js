const category = {
   movie: 'movie',
   tv: 'tv',
}

const movieType = {
   upcoming: 'upcoming',
   popular: 'popular',
   top_rated: 'top_rated',
}

const tvType = {
   popular: 'popular',
   top_rated: 'top_rated',
   on_the_air: 'on_the_air',
}

const backdropPath = (imgEndPoint) => `https://image.tmdb.org/t/p/original${imgEndPoint}`
const posterPath = (posterEndPoint) => `https://image.tmdb.org/t/p/w500${posterEndPoint}`

const trailerPath = (videoId) => `https://www.youtube.com/embed/${videoId}`

const tmdbConfigs = {
   category,
   movieType,
   tvType,
   backdropPath,
   posterPath,
   trailerPath,
}

export default tmdbConfigs
