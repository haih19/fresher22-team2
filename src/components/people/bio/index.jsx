import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {separateTxt} from '../../../helpers/sharedFunc'
import './bio.scss'

function ReadMore(props) {
   const [isReadMore, setIsReadMore] = useState(true)

   const handleReadMore = () => {
      setIsReadMore(!isReadMore)
   }

   return (
      <div className="bio">
         <div className="bio__name">
            <h2>{props.name}</h2>
         </div>
         <div className="bio__body">
            <div className="bio__body__title">
               <h3>Biography</h3>
            </div>
            <div className="bio__body__txt">
               {isReadMore
                  ? separateTxt(props.children.slice(0, 850)).map((item, index) => (
                       <p key={index}>{item}</p>
                    ))
                  : separateTxt(props.children).map((item, index) => (
                       <p key={index}>{item}</p>
                    ))}
            </div>

            <div
               style={{cursor: 'pointer'}}
               className="bio__body__btn"
               onClick={handleReadMore}>
               {isReadMore ? (
                  <span className="bio__body__btn__icon">
                     Read more <FontAwesomeIcon icon={faAngleRight} />
                  </span>
               ) : (
                  <span className="bio__body__btn__icon">
                     <FontAwesomeIcon icon={faAngleLeft} /> Show less
                  </span>
               )}
            </div>
         </div>
      </div>
   )
}

const Biography = (props) => {
   return (
      <>
         <ReadMore {...props}>{props.biography ? props.biography : ''}</ReadMore>
      </>
   )
}

export default Biography
