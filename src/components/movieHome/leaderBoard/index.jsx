import React from 'react'
import {leaderBoardData, findMax, splitText} from './leaderBoardData'
const LeaderBoard = () => {
   const arr = []
   const arr2 = []
   leaderBoardData.forEach((item) => {
      arr.push(item.allTime)
      arr2.push(item.thisWeed)
   })
   const maxAllTime = findMax(arr)
   const maxthisWeek = findMax(arr)

   return (
      <div className="leaderBoardHome">
         <div className="leaderBoardHome__tiltle">
            <h2>Leaderboard</h2>
            <div>
               <p>
                  <span></span>
                  All Time Edits
               </p>
               <p>
                  <span className="dot-edit"></span>
                  Edits This Week
               </p>
            </div>
         </div>
         <div className="leaderBoardHome__wrap-content">
            {leaderBoardData.map((item) => {
               return (
                  <div
                     className="leaderBoardHome__wrap-content__item"
                     key={item.id}>
                     <div className="leaderHome-ava">
                        <span>{splitText(item.name)}</span>
                     </div>
                     <div className="leaderHome-info">
                        <h4>{item.name}</h4>
                        <div>
                           <div style={{width: `${(item.allTime / maxAllTime) * 100}%`}}></div>
                           <h4>{item.allTime}</h4>
                        </div>
                        <div>
                           <div
                              className="info-thisweek"
                              style={{width: `${(item.thisWeed / maxthisWeek) * 100}%`}}></div>
                           <h4>{item.thisWeed}</h4>
                        </div>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default LeaderBoard
