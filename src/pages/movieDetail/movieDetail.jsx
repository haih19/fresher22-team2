import {useParams} from 'react-router-dom'
import HeaderMovieDetail from '../../components/movieDetail/header'
import MainMovieDetail from '../../components/movieDetail/main'
import {removeCharacter} from '../../helpers/movie/params'
function MovieDetail() {
   const {id} = useParams()

   return (
      <div>
         <HeaderMovieDetail id={removeCharacter(id)} />
         <MainMovieDetail id={removeCharacter(id)} />
      </div>
   )
}

export default MovieDetail
