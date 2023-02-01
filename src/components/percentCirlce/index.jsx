import './percentCircle.scss'

function PercentCircle() {
   return (
      <div className="percent-circle">
         <span>90%</span>
         <div className="percent-circle__">
            <div className="bar"></div>
            <div className="fill"></div>
         </div>
      </div>
   )
}

export default PercentCircle
