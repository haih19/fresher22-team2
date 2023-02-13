import React from 'react'

export default function Tooltip({iconProp}) {
   return (
      <li
         className="tooltip"
         title="Add to list"
         data-role="tooltip">
         <div className="no_click"> {iconProp}</div>
      </li>
   )
}
