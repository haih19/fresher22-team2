import React from 'react'
import './contentMovieDetail.scss'

export default function SocialTable() {
   return (
      <table className="new space">
         <thead>
            <tr>
               <th>Subject</th>
               <th>Status</th>
               <th>Replies</th>
               <th>Last Reply</th>
            </tr>
         </thead>
         <tbody>
            <tr className="open">
               <td className="subject">
                  <div className="post_info">
                     <div className="avatar_wrapper">
                        <a
                           href="/u/aholejones"
                           alt="Discussion started by aholejones">
                           a
                        </a>
                     </div>

                     <div className="link_wrapper">
                        <a
                           className="topic"
                           href="/movie/505642-black-panther-wakanda-forever/discuss/63dcadfe8741c40099b35669">
                           This is a bad film
                        </a>
                     </div>
                  </div>
               </td>
               <td>
                  <p className="status">Open</p>
               </td>
               <td>
                  <p>0</p>
               </td>
               <td>
                  <p>
                     Feb 03, 2023 at 1:47 PM
                     <br />
                     by aholejones
                  </p>
               </td>
            </tr>
            <tr className="open">
               <td className="subject">
                  <div className="post_info">
                     <div className="avatar_wrapper">
                        <a
                           href="/u/aholejones"
                           alt="Discussion started by aholejones">
                           a
                        </a>
                     </div>

                     <div className="link_wrapper">
                        <a
                           className="topic"
                           href="/movie/505642-black-panther-wakanda-forever/discuss/63dcadfe8741c40099b35669">
                           Ratings, Reviews and Box Office: Best ever sequel in the MCU?
                           Another billion dollar movie!
                        </a>
                     </div>
                  </div>
               </td>
               <td>
                  <p className="status">Open</p>
               </td>
               <td>
                  <p>0</p>
               </td>
               <td>
                  <p>
                     Feb 03, 2023 at 1:47 PM
                     <br />
                     by{' '}
                     <span className="username">
                        <a href="/movie/505642-black-panther-wakanda-forever/discuss/6370c62981383100dd36ef3e?page=3#63ae7cc3be4b3600828246ad">
                           DRDMovieMusings
                        </a>
                     </span>
                  </p>
               </td>
            </tr>
         </tbody>
      </table>
   )
}
