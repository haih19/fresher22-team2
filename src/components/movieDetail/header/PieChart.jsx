import React from 'react'
import {buildStyles, CircularProgressbarWithChildren} from 'react-circular-progressbar'

export default function PieChart({vote}) {
   const vote_average = (num) => {
      return Number((num * 10).toFixed())
   }
   return (
      <div className="pie">
         <CircularProgressbarWithChildren
            value={vote_average(vote)}
            styles={buildStyles({
               // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
               strokeLinecap: 'round',
               // Colors
               pathColor: '#21d07a',
               textColor: '#fff',
               trailColor: '#204529',
            })}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <p style={{fontSize: 24, position: 'relative', top: '-2%', left: '-4%'}}>
               {`${vote_average(vote)}`}
               <span style={{fontSize: 10, position: 'absolute', top: '20%'}}>%</span>
            </p>
         </CircularProgressbarWithChildren>
      </div>
   )
}
