import React from 'react'
import { useState } from 'react'
import SwitchSelectionHome from '../../switchSelectionHome'
import ModalVideoHome from './modalVideo'
import '../../../movieHome/contentHome/contentHome.scss'
const ReviewVideoHome = () => {
  const [sectionOnToggle, setSectionOnToggle] = useState({
    first: 'On TV',
    second: 'On TV',
    third: 'today'
  })
  const handleToggle = (section, selectedValue) => {
    setSectionOnToggle(prev => (
      {
        ...prev,
        [section]: selectedValue
      }
    ))
  }
  return (
    <>
      <div className='videoHome'>
      <SwitchSelectionHome tiltle='Latest Trailers'
          colorTiltle='white'
          items={['On TV', 'In Theaters']}
          onToggle={handleToggle.bind(null, 'first')}
          isToggle={sectionOnToggle.first === 'On TV' ? false : true}
          styleSwitch={['switch-boder-video', 'switch-text-video', 'switch-cover-video']}
        />
        <div className='videoHome__wrap-item'>
          <ModalVideoHome 
          tiltle ='Những Người Còn Sót Lại' 
          content ='Episode 5 Preview' 
          imgReview ='https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg'/>
          <ModalVideoHome 
          tiltle ='Anne Rices Mayfair Witches' 
          content = 'Trailer' 
          imgReview ='https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/dST2cvC7nBMMmLSONfmSo3drIJI.jpg'/>
          <ModalVideoHome 
          tiltle ='इमली' 
          content ='Imlie | Bidaai Promo' 
          imgReview ='https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/ymkFaEO0UdYXKIgcWZ23TlYIRD9.jpg'/>
        </div>
      </div>
    </>
  )
}

export default ReviewVideoHome