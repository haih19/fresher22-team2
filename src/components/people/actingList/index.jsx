import './acting.scss'
import {Link} from 'react-router-dom'
import {memo, useEffect, useState} from 'react'
import {getYear, mergeYearGroup, separateMediabyYear} from '../../../helpers/sharedFunc'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMinus} from '@fortawesome/free-solid-svg-icons'

function ActingList(props) {
   const {renderList} = props
   // console.log(renderList)
   const [dateCredit, setDateCredit] = useState([])
   const [nullDateCredit, setNullDateCredit] = useState([])

   // console.log(dateCredit)

   useEffect(() => {
      const {dateArr, emptiedStrArr} = separateMediabyYear(renderList)
      console.log(dateArr)
      console.log(emptiedStrArr)
      setDateCredit(dateArr)
      setNullDateCredit(emptiedStrArr)
   }, [renderList])

   return (
      <>
         <div className="acting">
            {nullDateCredit &&
               nullDateCredit.map((item) => (
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
                        <Link to="/">{item.title}</Link>
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
         {dateCredit &&
            mergeYearGroup(dateCredit).map((list, index) => (
               <div
                  key={index}
                  className="acting">
                  {list.map((item) => (
                     <div
                        key={item.id}
                        className="acting__item">
                        <div className="acting__item__left">
                           <div className="acting__item__left__year">
                              {getYear(item.release_date)}
                           </div>
                           <div className="acting__item__left__check">
                              <i className="fa-regular fa-circle"></i>
                           </div>
                        </div>
                        <div className="acting__item__right">
                           <Link to="/">{item.title || item.name}</Link>
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
      </>
   )
}

export default memo(ActingList)
