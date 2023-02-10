import React from 'react'
import ElipHome from '../../elipHome'
import CircularProgressHome from '../circularProgressHome'
import '../contentHome.scss'
//import PieHome from '../pieHome'
const CardHome = ({ imgCard, title, release_date, percent }) => {
    return (
        <>
            <div className='card-home'>
                <div className='card-home__wrap-img'>
                    <img src={imgCard} alt="" className='img-card' />
                    <div className='circular'>
                        <CircularProgressHome percent = {Math.round(percent * 10)}/>
                    </div>
                    <div className='elip'>
                        <ElipHome/>
                    </div>
                </div>
                <div className='card-home__wrap-content'>
                    <h3>{title}</h3>
                    <p>{release_date}</p>
                </div>
                {/* <PieHome/> */}
            </div>
        </>

    )
}

export default CardHome