import React, { memo } from 'react'
import './contentMovieDetail.scss'
import TitleContent from './TitleContent'

function TitleMenuContent({ onClickTab, status, listData }) {
  return (
    <>
      {
        onClickTab !== undefined && (
          <ul>
            {
              listData !== undefined && listData.map((value => (
                <li key={value.title} className={ status === value.title ? "active" : "" } 
                onClick={() => onClickTab(value.title)}>{value.title}<span>0</span></li>
              )
              ))
            }
          </ul>
        )
      }
    </>
  )
}

export default memo(TitleMenuContent)