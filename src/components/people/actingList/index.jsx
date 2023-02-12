import './acting.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {memo, useEffect, useState} from 'react'
import {getYear, mergeYearGroup, sortYear} from '../../../helpers/sharedFunc'
import tmdbService from '../../../services/tmdb.service'
import {separateMediabyYear, reviseCast} from '../../../helpers/years'

function ActingList(props) {
   const [data, setData] = useState({
      cast: [],
      crew: [],
   })
   const fetchPersonCredit = async (type) => {
      try {
         const res = await tmdbService.personMediaCredits(type, props.id)
         setData({...data, ...res})
      } catch (error) {
         console.log(error)
      }
   }
   const {emptiedStrArr: emptiedCast, dateArr: dateCast} = separateMediabyYear(
      reviseCast(data?.cast && data.cast)
   )

   useEffect(() => {
      switch (props.type) {
         case 'Movies':
            fetchPersonCredit('movie_credits')
            break
         case 'TV Shows':
            fetchPersonCredit('tv_credits')
            break
         default:
            fetchPersonCredit('combined_credits')
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.type])

   return (
      <div className="acting-list">
         {emptiedCast || dateCast ? (
            <>
               <div
                  className="acting-list__title"
                  style={{marginBottom: '10px'}}>
                  <h3 style={{fontWeight: 600, fontSize: '1.3em'}}>Acting</h3>
               </div>
               <div className="acting-list__item">
                  <div className="acting-list__item__content">
                     <div className="acting ">
                        {emptiedCast &&
                           emptiedCast.map((item) => (
                              <div
                                 key={item.id}
                                 className="acting__item">
                                 <div className="acting__item__left">
                                    <div className="acting__item__left__null">
                                       <FontAwesomeIcon icon={faMinus} />
                                    </div>
                                    <div className="acting__item__left__check">
                                       <i className="fa-regular fa-circle"></i>
                                    </div>
                                 </div>
                                 <div className="acting__item__right">
                                    <Link to={`/movie/${item.id}`}>{item.title}</Link>
                                    <div className="acting__item__right__character">
                                       {item.character && (
                                          <p>
                                             <span>as</span> {item.character}
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           ))}
                     </div>
                  </div>
                  <div className="acting-list__item__content">
                     {dateCast &&
                        mergeYearGroup(sortYear(dateCast)).map((list, index) => (
                           <div
                              key={index}
                              className="acting ">
                              {list.map((item) => (
                                 <div
                                    key={item.id}
                                    className="acting__item">
                                    <div className="acting__item__left">
                                       <div className="acting__item__left__year">
                                          {getYear(item.date)}
                                       </div>
                                       <div className="acting__item__left__check">
                                          <i className="fa-regular fa-circle"></i>
                                       </div>
                                    </div>
                                    <div className="acting__item__right">
                                       <Link to={`/movie/${item.id}`}>
                                          {item.title || item.name}
                                       </Link>
                                       <div className="acting__item__right__character">
                                          {item.character && (
                                             <p>
                                                <span>as</span> {item.character}
                                             </p>
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        ))}
                  </div>
               </div>
            </>
         ) : (
            ''
         )}
      </div>
   )
}

export default memo(ActingList)
