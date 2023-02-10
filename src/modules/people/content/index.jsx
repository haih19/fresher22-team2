import './content.scss'
import Biography from '../../../components/people/bio'
import React, {useEffect, useState} from 'react'
import tmdbService from '../../../services/tmdb.service'
import CardSlide from '../../../components/people/cardList'
import ActingList from '../../../components/people/actingList'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {mediaType, department} from '../../../constants/select'

// const generatePersonCreditList = (type, arr1, arr2, arr3) => {
//    switch (type) {
//       case 'Movies':
//          return arr1
//       case 'TV Shows':
//          return arr2
//       default:
//          return arr3
//    }
// }
const generateActingType = (type) => {
   switch (type) {
      case 'Movies':
         return 'Movies'
      case 'TV Shows':
         return 'TV Shows'
      default:
         return 'All'
   }
}

function Content(props) {
   const [items, setItems] = useState(null)
   const [movieCredits, setMovieCredits] = useState()
   const [tvCredits, setTvCredits] = useState([])
   const [productions, setProductions] = useState([])
   const [creditType, setCreditType] = useState([])

   const handleSetCreditType = (type) => {
      setCreditType(type)
   }

   // generatePersonCreditList(creditType, movieCredits, tvCredits)
   // console.log(generatePersonCreditList(creditType, movieCredits, tvCredits))
   // // neu bo ham o ngoai su dung usecallback
   useEffect(() => {
      const getPeopleDetail = async () => {
         try {
            const res1 = await tmdbService.detail('person', props.id)
            const res2 = await tmdbService.personMediaCredits('movie_credits', props.id)
            const res3 = await tmdbService.personMediaCredits('tv_credits', props.id)
            // PROMISE ALL
            setItems(res1)
            setMovieCredits(res2.cast)
            setProductions(res2.crew)
            setTvCredits(res3.cast)
         } catch (error) {
            console.log(error)
         }
      }
      getPeopleDetail()
   }, [props.id])
   return (
      <div className="content">
         <Biography
            biography={items ? items.biography : null}
            name={items && items.name}
         />
         <CardSlide movieCredits={movieCredits && movieCredits} />

         <CreditFilters onClick={handleSetCreditType} />
         {/* <ActingList renderList={generatePersonCreditList(creditType, movieCredits, tvCredits)} /> */}
         {/* <ActingList
            renderList={generatePersonCreditList(creditType, productions, productions)}
         /> */}
         <ActingList
            id={props.id}
            type={generateActingType(creditType)}
         />
         {/* <div className="content__list">
            <div className="content__list__title">
               <h3 style={{fontWeight: 600, fontSize: '1.3em', marginBottom: '10px'}}>
                  Acting
               </h3>
            </div>
         </div> */}
      </div>
   )
}

const CreditFilters = React.memo((props) => {
   const [category, setCategory] = useState('All')
   const [actionType, setActionType] = useState('All')
   const [isDisplayCate, setIsDisplayCate] = useState(false)
   const [isDisplayActionType, setIsDisplayActionType] = useState(false)

   const onClickLeft = (e) => {
      setIsDisplayCate(!isDisplayCate)
      setCategory(e)
      props.onClick(e)
   }
   const onClickRight = (e) => {
      setIsDisplayActionType(!isDisplayActionType)
      setIsDisplayCate(false)
      setActionType(e)
   }

   return (
      <div
         className="content__select"
         style={{marginTop: 30}}>
         <div className="content__select__left">
            <div
               className="content__select__left__title"
               onClick={() => setIsDisplayCate(!isDisplayCate)}>
               <div className="content__select__left__title__txt">{category}</div>
               <div className="content__select__left__title__icon">
                  <FontAwesomeIcon icon={faAngleDown} />
               </div>
            </div>
            {isDisplayCate ? (
               <div className="content__select__left__body">
                  {mediaType.map((item, index) => (
                     <div
                        onClick={() => onClickLeft(item)}
                        key={index}
                        className="content__select__left__body__item">
                        {item}
                     </div>
                  ))}
               </div>
            ) : (
               ''
            )}
         </div>
         <div className="content__select__right">
            <div
               className="content__select__right__title"
               onClick={() => setIsDisplayActionType(!isDisplayActionType)}>
               <div className="content__select__right__title__txt">{actionType}</div>
               <div className="content__select__right__title__icon">
                  <FontAwesomeIcon icon={faAngleDown} />
               </div>
            </div>
            {isDisplayActionType ? (
               <div className="content__select__right__body">
                  {department.map((item, index) => (
                     <div
                        onClick={() => onClickRight(item)}
                        key={index}
                        className="content__select__right__body__item">
                        {item}
                     </div>
                  ))}
               </div>
            ) : (
               ''
            )}
         </div>
      </div>
   )
})

export default Content
