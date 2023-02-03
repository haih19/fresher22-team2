import React from 'react'
import './contentHome.scss'
const CardHome = ({imgCard, title, release_date}) => {
    return (
        <>
            
                    <div className='card-home'>
                        <img src={imgCard} alt="" className='img-card' />
                        <div className='card-home__wrap-content'>
                            <h3>{title}</h3>
                            <p>{release_date}</p>
                        </div>
                    </div>
             
        </>

    )
}

export default CardHome