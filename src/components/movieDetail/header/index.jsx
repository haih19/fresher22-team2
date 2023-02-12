import React, {useEffect, useState} from 'react'
import ModalVideo from 'react-modal-video'
import tmdbService from '../../../services/tmdb.service'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookmark, faHeart, faList, faPlay, faStar} from '@fortawesome/free-solid-svg-icons'
import {getYear, formatDate} from '../../../helpers/movie/year'
import './headerMovieDetail.scss'
import Poster from './Poster'
import PieChart from './PieChart'
import Tooltip from './Tooltip'
import Profile from './Profile'

export default function HeaderMovieDetail({id}) {
   const [detail, setDetail] = useState()
   const [listTrailers, setListTrailers] = useState()
   const [isOpen, setIsOpen] = useState(false)

   const getPoster = async () => {
      try {
         const res = await tmdbService.detail('movie', id)
         const movieTrailer = await tmdbService.getVideos('movie', id)

         setDetail(res)
         setListTrailers(movieTrailer)
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      getPoster()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   const convertTime = (str) => {
      const hours = Number(str) / 60
      const hour = Math.floor(Number(str) / 60)
      return `${hour}h ${Math.round((hours - hour) * 60)}m`
   }

   return (
      <div
         className="hdoverview"
         style={{
            backgroundImage: `url(${
               detail && tmdbService.poster('w500', detail.backdrop_path)
            })`,
         }}>
         <div className="hdoverview__keyboard">
            <div className="hdoverview__column">
               <section className="images">
                  <div className="poster_wrapper">
                     <Poster
                        pathImg={detail && detail.poster_path}
                        title={detail && detail.original_title}
                     />
                  </div>

                  <div className="header_poster_wrapper ">
                     <section className="header__poster">
                        <div className="title">
                           <h2 className="name__header">
                              <a
                                 className="link__name"
                                 href="/movie/315162-puss-in-boots-the-last-wish">
                                 {detail && detail.original_title}
                              </a>
                              <span className="tag">
                                 ({detail && getYear(detail.release_date)})
                              </span>
                           </h2>

                           <div className="facts">
                              <span className="certification">PG</span>

                              <span className="release">
                                 {detail && formatDate(detail.release_date)} (US)
                              </span>

                              <span className="runtime">
                                 {detail && convertTime(detail.runtime)}
                              </span>
                           </div>
                        </div>

                        <ul className="auto">
                           <li className="chart">
                              <PieChart vote={detail && detail.vote_average} />
                              <div className="text">
                                 User
                                 <br />
                                 Score
                              </div>
                           </li>
                           <Tooltip iconProp={<FontAwesomeIcon icon={faList} />} />
                           <Tooltip iconProp={<FontAwesomeIcon icon={faHeart} />} />
                           <Tooltip iconProp={<FontAwesomeIcon icon={faBookmark} />} />
                           <Tooltip iconProp={<FontAwesomeIcon icon={faStar} />} />
                           <li className="video">
                              <div className="no_click--play">
                                 <FontAwesomeIcon icon={faPlay} />
                              </div>
                              <span
                                 className="play"
                                 onClick={() => {
                                    setIsOpen(true)
                                 }}>
                                 Play Trailer
                              </span>
                           </li>
                        </ul>

                        <div className="header_info">
                           <h3
                              className="tagline"
                              dir="auto">
                              {detail && detail.tagline}
                           </h3>
                           <h3
                              className="title__overview"
                              dir="auto">
                              Overview
                           </h3>
                           <div className="overview">{detail && detail.overview}</div>

                           <ol className="people">
                              <Profile />
                              <Profile />
                              <Profile />
                              <Profile />
                           </ol>
                        </div>
                     </section>
                  </div>
               </section>
            </div>
         </div>
         <ModalVideo
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            videoId={listTrailers?.results[0]?.key}></ModalVideo>
      </div>
   )
}
