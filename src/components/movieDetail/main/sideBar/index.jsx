import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import IconSocial from './IconSocial'
import Description from './Description'
import './sideBarMovieDetail.scss'
import Keyword from './Keyword'
import TitleSideBar from './TitleSideBar'
import LeaderTop from './LeaderTop'
import { faCircleExclamation, faKeyboard } from '@fortawesome/free-solid-svg-icons'

export default function SideBarMovieDetail() {
  return (
    <div className='sideBar'>
      <div className={'sideBar__iconWrap'}>
        <IconSocial background="https://www.themoviedb.org/assets/2/v4/glyphicons/social/facebook-71155d1cd369c47ce8456477833a92c324fa01e6d628cb6ece19cedea3c1c480.svg" />
        <IconSocial background="https://www.themoviedb.org/assets/2/v4/glyphicons/social/twitter-a6ff8c172b8e086f4a64578cee0a16676c1a067b47a1b1b186d58795d241a852.svg" />
        <IconSocial background="https://www.themoviedb.org/assets/2/v4/glyphicons/social/instagram-74e6299c864adc384258da3b3a8eb09282b7ccda4dd1dfa9a4158ba2ea8583b9.svg" />
        <IconSocial background="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-351-link-5f643a86c2515cb06ea08ebc798941824f76bbcea4ed571222a81f271b30c7f3.svg" />
      </div>
      <div className='sideBar__Des'>
        <Description header="Original Title" description="Puss in Boots: The Last Wish" />
        <Description header="Status" description="Released" />
        <Description header="Original Language" description="English" />
        <Description header="Budget" description="$90,000,000.00" />
        <Description header="Revenue" description="$334,147,910.00" />
      </div>
      <div className='keyword'>
        <TitleSideBar title='Keyword' />
        <div className="keyword-list">
          <Keyword name="loss of loved one" />
          <Keyword name="hero" />
          <Keyword name="sequel" />
          <Keyword name="superhero" />
          <Keyword name="based on comic" />
          <Keyword name="death of mother" />
          <Keyword name="mourning" />
          <Keyword name="death of brother" />
          <Keyword name="duringcreditsstinger" />
          <Keyword name="death of king" />
          <Keyword name="marvel cinematic universe (mcu)" />
          <Keyword name="hidden civilization" />
        </div>
      </div>

      <div className="content-score">
        <TitleSideBar title='Content Score' />
        <p className='score_num'>100</p>
        <p>Yes! Looking good!</p>
      </div>

      <div className="sideBar-top">
        <TitleSideBar title='Top Contributors' />
        <div className="leaders-list">
          <LeaderTop />
          <LeaderTop />
          <LeaderTop />
          <LeaderTop />
        <p className='view-more__link'><a href="/movie/76600-avatar-the-way-of-water/changes">View Edit History</a></p>
        </div>
      </div>

      <div className="popularity-trend">
        <TitleSideBar title='Popularity Trend' />
        <div id="popularity_waypoint" className="popularity" >
          <div id="popularity_chart" data-role="sparkline" className=" k-sparkline" style={{position: 'relative'}}>
            <span data-role="surface" style={{width: '203px', height:'50px',}}>
              <svg style={{width: '100%', height: '100%', overflow: 'hidden', left: '0px', top: '-.2px'}}>
                <path d="M0 0 L 203 0 203 50 0 50Z" stroke="none" fill="none"></path>
                <path d="M2 3 L 200 3 200 48 2 48Z" stroke="none" fill="#fff"></path>
                <path style={{display: 'none'}} d="M101 3 L 101 48" stroke="#8e8e8e" fill="none"></path>
                <path d="M16.143 40.286 L 44.429 22.286 72.714 10.714 101 12 129.286 8.143 157.571 9.429 185.857 3" stroke="#202020" fill="none"></path>
              </svg>
            </span>
          </div>
        </div>
        <p className="button-collection"><a href="/collection/529892-black-panther-collection">edit page</a></p>
      </div>
        <p className='view-more__link '><a href="/movie/76600-avatar-the-way-of-water/changes"><FontAwesomeIcon icon={faKeyboard} /> Keyboard Shortcuts</a></p>
        <p className='view-more__link'><a href="/movie/76600-avatar-the-way-of-water/changes"><FontAwesomeIcon icon={faCircleExclamation} /> Report an Issue</a></p>
    </div>
  )
}
