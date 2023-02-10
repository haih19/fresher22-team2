import Skeleton from 'react-loading-skeleton'
import './skeletonCard.scss'

function SkeletonCard() {
   return (
      <div className="card-skeleton">
         <div
            className="card-skeleton__img"
            style={{display: 'inline-block'}}>
            <Skeleton style={{width: 94, height: 141}} />
         </div>
         <div className="card-skeleton__content">
            <Skeleton style={{width: '100%', marginBottom: 20, height: 50}} />
            <Skeleton
               style={{width: '100%'}}
               count={2}
            />
         </div>
      </div>
   )
}

export default SkeletonCard
