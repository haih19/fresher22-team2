import { useParams } from "react-router-dom"
import HeaderMovieDetail from "../../components/movieDetail/header"
import MainMovieDetail from "../../components/movieDetail/main"
import { removeCharacter } from "../../helpers/movie/params"
function MovieDetail() {
   const {id} = useParams();
   // console.log(id);
   // console.log(removeCharacter('12345-bhg-jj')) //12345
   return <div>
      <HeaderMovieDetail id={removeCharacter(id)}/>
      <MainMovieDetail id={removeCharacter(id)}/>
   </div>
}

export default MovieDetail
