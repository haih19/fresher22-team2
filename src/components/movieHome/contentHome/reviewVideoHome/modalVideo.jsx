import React, { useState, useRef } from 'react'
import tmdbService from '../../../../services/tmdb.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faXmark } from '@fortawesome/free-solid-svg-icons'
import ModalVideo from 'react-modal-video';
import ElipHome from '../../elipHome'
import '../../../movieHome/contentHome/contentHome.scss'
const ModalVideoHome = ({tiltle, imgReview, content}) => {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!isOpen)
    }
    const toggleModal = isOpen === true ? 'block' : 'none'
    return (
        <React.Fragment>
            <div className='wrap-modal'>
                <div className='wrap-modal__video'>
                    <div className='wrap-modal__video__content'>
                        <img className='img-video'
                            src={imgReview}
                        />
                        {isOpen === false ?
                            <button className="btn-primary myBtn" onClick={() => handleClick()}>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                            :
                            ''
                        }
                    </div>
                    <h4>{tiltle}</h4>
                    <p>{content}</p>
                </div>

                {/* The Modal  */}
                <div id="myModal" className="modal"
                    style={{
                        display: `${toggleModal}`
                    }}
                >

                    {/* Modal content  */}
                    <div className="modal-content">
                        {isOpen === true ?
                            <button className="btn-close-video close" onClick={() => handleClick()}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                            :
                            ''
                        }
                        <ModalVideo
                            channel='youtube'
                            autoplay
                            isOpen={isOpen}
                            videoId="L61p2uyiMSo"
                            onClose={() => setOpen(false)} />
                    </div>

                </div>




            </div>
        </React.Fragment>
    )
}

export default ModalVideoHome