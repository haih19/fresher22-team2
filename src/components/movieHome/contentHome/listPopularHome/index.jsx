import React, {useState} from 'react'
import SwitchSelectionHome from '../../switchSelectionHome'
import CardPopularList from './CardPopularList'
import '../contentHome.scss'
const ListPopularHome = () => {
   //const [callApiHome, setCallApiHome] = useState([])
   const [sectionOnToggle, setSectionOnToggle] = useState({
      first: 'On TV',
      second: 'On TV',
      third: 'today',
   })
   const handleToggle = (section, selectedValue) => {
      setSectionOnToggle((prev) => ({
         ...prev,
         [section]: selectedValue,
      }))
   }
   return (
      <div className="trending-wrap-home">
         <SwitchSelectionHome
            tiltle={"What's Popular"}
            colorTiltle=""
            items={['On TV', 'In Theaters']}
            onToggle={handleToggle.bind(null, 'first')}
            isToggle={sectionOnToggle.first === 'On TV' ? false : true}
            styleSwitch={['', '', '']}
         />
         <CardPopularList fetch={sectionOnToggle.first} />
      </div>
   )
}

export default ListPopularHome
