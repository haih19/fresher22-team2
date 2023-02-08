import './sidebar.scss'
import {useEffect, useState} from 'react'
import tmdbService from '../../../services/tmdb.service'
import moment from 'moment/moment'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamation, faKeyboard} from '@fortawesome/free-solid-svg-icons'

const calculateLifeAge = (birthday, deathday) => {
   const result =
      birthday !== undefined &&
      deathday !== undefined &&
      birthday !== null &&
      deathday === null
         ? `${birthday} (${moment().diff(birthday, 'years')} years old)`
         : `${birthday}`

   return result
}

const calculateDeadAge = (birthday, deathday) => {
   const result =
      birthday !== undefined &&
      deathday !== undefined &&
      birthday !== null &&
      deathday !== null ? (
         <div className="sidebar__info__body__item">
            <div className="sidebar__infor__body__item__header">
               <strong>Day of Death</strong>
            </div>
            <div className="sidebar__infor__body__item__content">
               {`${deathday} (${moment(deathday).diff(birthday, 'years')} years old)`}
            </div>
         </div>
      ) : (
         ''
      )

   return result
}

function Sidebar(props) {
   const [items, setItems] = useState(null)
   const [credits, setCredits] = useState(null)
   const [tvCredits, setTvCredits] = useState(null)

   const getPeopleDetail = async () => {
      try {
         const res1 = await tmdbService.detail('person', props.id)
         const res2 = await tmdbService.personMediaCredits('movie_credits', props.id)
         const res3 = await tmdbService.personMediaCredits('tv_credits', props.id)
         setItems(res1)
         setCredits(res2)
         setTvCredits(res3)
      } catch (error) {
         console.log(error)
      }
   }

   // console.log(credits && separateMediabyYear([...credits.cast]))

   // console.log(credits && mergeYearGroup(separateMediabyYear([...credits.cast]).dateArr))
   // console.log(moment('2023-02-01', 'YYYY/MM/DD').valueOf())
   // console.log(moment('2000-02-01', 'YYYY/MM/DD').valueOf())
   // console.log(getYear('2047-01-02'))

   useEffect(() => {
      getPeopleDetail()
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])
   return (
      <div className="sidebar">
         <div className="sidebar__avatar">
            <img
               src={items ? tmdbService.posterPath(items.profile_path) : null}
               alt=""
            />
         </div>
         <div className="sidebar__info">
            <div className="sidebar__info__title">
               <h3>Personal Info</h3>
            </div>
            <div className="sidebar__info__body">
               <div className="sidebar__info__body__item">
                  <div className="sidebar__infor__body__item__header">
                     <strong>Known For</strong>
                  </div>
                  <div className="sidebar__infor__body__item__content">
                     {items && items.known_for_department}
                  </div>
               </div>

               <div className="sidebar__info__body__item">
                  <div className="sidebar__infor__body__item__header">
                     <strong>Known Credits</strong>
                  </div>
                  <div className="sidebar__infor__body__item__content">
                     {credits && tvCredits && credits.cast.length + tvCredits.cast.length}
                  </div>
               </div>

               <div className="sidebar__info__body__item">
                  <div className="sidebar__infor__body__item__header">
                     <strong>Gender</strong>
                  </div>
                  <div className="sidebar__infor__body__item__content">
                     {items && (items.gender === 1 ? 'Female' : 'Male')}
                  </div>
               </div>

               <div className="sidebar__info__body__item">
                  <div className="sidebar__infor__body__item__header">
                     <strong>Birthday</strong>
                  </div>
                  <div className="sidebar__infor__body__item__content">
                     {items && calculateLifeAge(items.birthday, items.deathday)}
                  </div>
               </div>
               {items && calculateDeadAge(items.birthday, items.deathday)}
               <div className="sidebar__info__body__item">
                  <div className="sidebar__infor__body__item__header">
                     <strong>Place of Birth</strong>
                  </div>
                  <div className="sidebar__infor__body__item__content">
                     {items && items.place_of_birth}
                  </div>
               </div>

               <div className="sidebar__info__body__item">
                  <div className="sidebar__infor__body__item__header">
                     <strong>Also Known As</strong>
                  </div>
                  {items &&
                     items.also_known_as.map((item, index) => (
                        <div
                           key={index}
                           className="sidebar__infor__body__item__content">
                           {item}
                        </div>
                     ))}
               </div>
            </div>
         </div>
         <div className="sidebar__btn-edit">
            <p>Edit Page</p>
         </div>
         <div className="sidebar__actions">
            <div className="sidebar__actions__keyboard">
               <FontAwesomeIcon icon={faKeyboard} /> <span>Keyboard Shortcuts</span>
            </div>
            <div className="sidebar__actions__report">
               <FontAwesomeIcon icon={faExclamation} /> <span>eport an Issue</span>
            </div>
         </div>
      </div>
   )
}

export default Sidebar
