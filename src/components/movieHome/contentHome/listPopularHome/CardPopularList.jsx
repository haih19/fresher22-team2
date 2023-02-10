import React, { useEffect, useState } from 'react'
import CardHome from '../cardHome/cardHome'
import '../contentHome.scss'
import tmdbService from '../../../../services/tmdb.service'
import {RequestHome} from '../requsetHome'
const CardPopularList = ({fetch}) => {

  const [dataCardPopular, setDataCardPopular] = useState([])
  useEffect(() => {
    async function fechData() {
      try {
        const res = await tmdbService.getPopularTv(RequestHome[fetch])
        setDataCardPopular(res.results);
       
      }
      catch (e) {
        console.log(e);
      }
    }
    fechData()
  }, [fetch])
  
  return (
    <div className='wrap-cards'>
      {dataCardPopular.map((item, index) => {
        return (
          <CardHome key={index} imgCard={tmdbService.posterPath(item.poster_path)}
          title={item.name||item.original_name||item.title}
          release_date={item.first_air_date||item.release_date}
          percent = {item.vote_average} />
        )
      })}
    </div>
  )
}

export default CardPopularList