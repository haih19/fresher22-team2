import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './sliderHeader.scss'
const SliderHeader = () => {
    return (
        <div className='slider'>
            <div className='slider__wrap bgTop'>
                <div className='content-wrap-top'>
                    <div className='content'>
                        <h2>Welcome.</h2>
                        Millions of movies, TV shows and people to discover. Explore now.
                    </div>
                    <div className='slider-search'>
                        <input placeholder='Search for a movie, tv show, person......' />
                        <button className='button-search'>Search</button>
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className='bottom__content-wrap'>

                    <h2>THAT'S A
                        <br/>
                        WRAP 2022</h2>
                    
                        <p>The best (and worst) from 2022.</p>
                        
                            <button>Check it out <FontAwesomeIcon icon={faArrowRight} /></button>
                      
                </div>
            </div>
        </div>
    )
}

export default SliderHeader