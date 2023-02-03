import React, { useEffect, useState } from 'react'
import CardHome from './cardHome'
import './contentHome.scss'
import tmdbService from '../../../services/tmdb.service'
const CardHomeList = () => {

  const [dataCard, setDataCard] = useState([])
  useEffect(() => {
    async function fechData() {
      try {
        const res = await tmdbService.getTrendingList('movie', { time_window: 'day' })
        setDataCard(res)
      }
      catch (e) {
        console.log(e);
      }
    }
    fechData()
  }, [])
  const listMovieTrending = dataCard.results

  // const listCard = [
  //   {
  //     title: 'title',
  //     release_date: '10/2/2002',
  //     imgCard: 'https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
  //   },
  //   {
  //     title: 'title',
  //     release_date: '10/2/2002',
  //     imgCard: 'https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
  //   },
  //   {
  //     title: 'title hdkjfdhf jshdkjfdjfdsfdjfd',
  //     release_date: '10/2/2002',
  //     imgCard: 'https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
  //   },
  //   {
  //     title: 'title',
  //     release_date: '10/2/2002',
  //     imgCard: 'https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
  //   },
  //   {
  //     title: 'title',
  //     release_date: '10/2/2002',
  //     imgCard: 'https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
  //   },
  //   {
  //     title: 'title',
  //     release_date: '10/2/2002',
  //     imgCard: 'https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
  //   },
  //   {
  //     title: 'title',
  //     release_date: '10/2/2002',
  //     imgCard: 'https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
  //   }
  // ]
  const a = 'https://www.themoviedb.org/t/p/w220_and_h330_face/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg'
  return (
    <div className='wrap-cards'>
      {listMovieTrending.map((item, index) => {
        return (
          <CardHome key={index} imgCard={a}
          title={item.title}
          release_date={item.release_date} />
        )

      })}
    </div>
  )
}

export default CardHomeList