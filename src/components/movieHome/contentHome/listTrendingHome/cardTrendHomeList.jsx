import React, { useEffect, useState } from 'react'
import CardHome from '../cardHome/cardHome'
import '../contentHome.scss'
import tmdbService from '../../../../services/tmdb.service'
import { RequestHome } from '../requsetHome'
import Blur from '../blurHome'
import { Link } from 'react-router-dom'
const CardHomeList = ({ fetch }) => {

  const [dataCardTrending, setDataCardTrending] = useState([])
  useEffect(() => {
    async function fechData() {
      try {
        const res = await tmdbService.getTrendingList('movie', { time_window: RequestHome[fetch] })
        setDataCardTrending(res.results);

      }
      catch (e) {
        console.log(e);
      }
    }
    fechData()
  }, [fetch])

  return (
    <div className='wrap-cards'>
      {dataCardTrending.map((item, index) => {
        return (
          <Link to={`/movie/${item.id}`}>
            <CardHome key={index} imgCard={tmdbService.posterPath(item.poster_path)}
              title={item.title}
              release_date={item.release_date}
              percent={item.vote_average} />
          </Link>
        )
      })}
      <Blur />
    </div>
  )
}

export default CardHomeList