import './percentCircle.scss'
import PropTypes from 'prop-types'

function PercentCircle(props) {
   return (
      <div className="percent-circle">
         <span className="percent-circle__num">
            {props.number}
            <span>%</span>
         </span>
         <div className="percent-circle__slice">
            <div className="percent-circle__slice__bar">bar</div>
            <div className="percent-circle__slice__fill"></div>
         </div>
      </div>
   )
}

PercentCircle.propTypes = {
   number: PropTypes.string,
   color: PropTypes.string,
}

export default PercentCircle
