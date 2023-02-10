import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import './sliderHeader.scss'
const SliderHeader = () => {
    const [search, setSearch] = useState('');
    const  navigate = useNavigate()
    const handleOnChange = (e) =>{
        setSearch(e.target.value)
    }
    const handleOnClick = () =>{
        navigate(`/search/movie?query=${search}&page=1`)
        setSearch('')
    }
    return (
        <div className='slider'>
            <div className='slider__wrap bgTop'>
                <div className='content-wrap-top'>
                    <div className='content'>
                        <h2>Welcome.</h2>
                        Millions of movies, TV shows and people to discover. Explore now.
                    </div>
                    <div className='slider-search'>
                        <input
                        value={search}
                        onChange={(e)=>handleOnChange(e)} 
                        placeholder='Search for a movie, tv show, person......' />
                        <button 
                        onClick={() =>handleOnClick()}
                        className='button-search'>Search</button>
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