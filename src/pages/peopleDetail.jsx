import {useParams} from 'react-router'
import {removeCharacter} from '../helpers/param'
import Content from '../modules/people/content'
import Sidebar from '../modules/people/sidebar'
function PeopleDetail() {
   const {id} = useParams()

   return (
      <div
         className="container"
         style={{marginTop: 64, padding: '30px 40px', display: 'flex', gap: 30}}>
         <Sidebar id={removeCharacter(id)} />
         <Content id={removeCharacter(id)} />
      </div>
   )
}

export default PeopleDetail
