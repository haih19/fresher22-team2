import React, { useEffect, useState, useCallback } from 'react'
import './contentMovieDetail.scss'
import tmdbService from '../../../../services/tmdb.service'
// import '../mainMovieDetail.scss'
import CardPerson from './CardPerson'
import TitleContent from './TitleContent'
import LinkContent from './LinkContent'
import TitleMenuContent from './TitleMenuContent'
import SocialTable from './SocialTable'
import Recommendation from './Recommendation'
import MediaContent from './MediaContent'
// import Test from './test'

export default function ContentMovieDetail({id}) {
    const [credits, setCredits] = useState();
    const [detail, setDetail] = useState();

    const [status, setStatus] = useState('Discussions');
    const [status2, setStatus2] = useState('Most Popular');

    const getCast = async () => {
        try {
            const res = await tmdbService.credits('movie', id);
            const movie = await tmdbService.detail('movie', id);

            // console.log(res); //return object cua api
            setCredits(res)
            setDetail(movie)

        } catch (error) {
            console.log(error)
        }
    }
    // console.log('useState', credits);
    useEffect(() => {
        getCast();
    }, [])

    const listSocial = [
        {
            title: 'Reviews',
            content: `We don't have any reviews for ${detail && detail.original_title}. Would you like to write one?`
        }, 
        {
            title: 'Discussions',
            content: <SocialTable />
        }
    ]
    const listMedia = [
        {
            title: 'Most Popular',
            content: <MediaContent />
        }, 
        {
            title: 'Videos',
            content: `We don't have any videos for ${detail && detail.original_title}. Would you like to write one?`
        },
        {
            title: 'Backdrops',
            content: `We don't have any backdrops for ${detail && detail.original_title}. Would you like to write one?`
        },
        {
            title: 'Posters',
            content: `We don't have any posters for ${detail && detail.original_title}. Would you like to write one?`
        },
    ]
    const handleClick = useCallback(
        (title) => {
            setStatus(title)
        }, []
    )

  return (
    <div className='contentMovie'>
        
        <div className='section-content cast'>
            <TitleContent title="Top Billed Cast" />
            <div className="cast_people shadow_card">
                <div className="cards-list">
                   {credits && credits.cast.map((item, index) => (<CardPerson key={index} item={item}/>))}
                </div>
            </div>
            <LinkContent href="https://www.w3schools.com/" title="Full Cast &amp; Crew"/>
        </div>

        <div className="section-content social">
            <div className="title-menu">
                <TitleContent title="Social" />
                <TitleMenuContent onClickTab={handleClick} status={status} listData={listSocial}/>
            </div>
            <div className="content-social">
                <div className="original_content">
                    <div className="discussion_container">
                        {
                            listSocial.map((value) => (
                                status === value.title && (
                                    <div key={value.title}>{value.content}</div>
                                )
                            ))
                        }
                        <LinkContent href="https://www.w3schools.com/" title="Go to Discussions"/>
                        {/* <p className="cast__link"><a className="" href="/movie/505642-black-panther-wakanda-forever/discuss">Go to Discussions</a></p> */}
                    </div>
                </div>
            </div>
        </div>

{/* media here */}
        <div className="section-content">
            {/* title */}
            <div className="title-menu">
                <TitleContent title="Media" />
                <TitleMenuContent onClickTab={handleClick} status={status2} listData={listMedia}/>
            </div>
            {/* content */}
            {
                    listMedia.map((value) => (
                        status2 === value.title && (
                            <div key={value.title}>{value.content}</div>
                        )
                    ))
                }
            {/* <div className="scroller_wrap shadow_card">
                <div className="cards-list">
                    <div className="wrapper_hihi media-item">
                        <a href="/video/play?key=fkvTTmqjn3Q" data-site="YouTube" data-id="fkvTTmqjn3Q" data-title="Chiến Binh Báo Đen: Wakanda Bất Diệt"><div className="play_background"><span className="glyphicons_v2 play invert svg"></span></div></a>
                    </div>
                    <div className="media-item">
                        <img src='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg' alt="Chiến Binh Báo Đen: Wakanda Bất Diệt" />
                    </div>
                    <div className="poster-media media-item">
                        <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/uLluouDdIqqtB5Yrvdvt8DzAEs6.jpg' alt="Chiến Binh Báo Đen: Wakanda Bất Diệt" />
                    </div>
                </div>
            </div> */}
        </div>

{/* khac */}
        <div className="section-content section-collection">
            <div className='collection-text'>
                <h2>Part of the Loạt phim Chiến Binh Báo Đen</h2>
                <p>Includes Black Panther: Chiến Binh Báo Đen and Chiến Binh Báo Đen: Wakanda Bất Diệt</p>
            </div>

            <p className="button-collection"><a href="/collection/529892-black-panther-collection">View the Collection</a></p>
        </div>
{/* Recommendations here */}
        <div className="section-content">
            <TitleContent title="Recommendations" />
            <div className="scroller_wrap shadow_card">
                <div className="cards-list">
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                    <Recommendation />
                </div>
            </div>
        </div>
    </div>
  )
}
