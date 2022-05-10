import React, { useState } from 'react'

import styles from './herosection.module.css'
import clsx from 'clsx'
import Button from '../Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar, faAngleLeft,
    faAngleRight
} from '@fortawesome/free-solid-svg-icons'

import slides from './HeroItems'


const Herosection = () => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (

        <div className={clsx(styles.slider)}>
            <div className={`grid`}>
                <div className={clsx(styles.carousel__item)}>
                    <FontAwesomeIcon onClick={prevSlide} className={clsx(styles.carouselcontrol_previcon)} icon={faAngleLeft}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={nextSlide} className={clsx(styles.carouselcontrol_nexticon)} icon={faAngleRight}></FontAwesomeIcon>
                    {
                        slides.map((slide, index) => {
                            return (
                                <div style={{overflow: "hidden"}} key={index}>
                                    {index === current && (
                                        <>
                                            <div className={index === current ? clsx(styles.slide, styles.fade) : clsx(styles.slide)} >
                                                <img src={slide.url} alt={slide.alt} />
                                            </div>
                                            <div className={clsx(styles.textcontent)}>
                                                <div className={clsx(styles.textheading)}>
                                                    <h3 className={clsx(styles.textheading_main)}>Enjoy <span>Your</span> Holiday</h3>
                                                    <h3 className={clsx(styles.textheading_main)}>With Our <span>Agency</span></h3>
                                                </div>
                                                <div className={clsx(styles.textdescription)}>
                                                    <div className={clsx(styles.textdescription1)}>
                                                        <i className={clsx(styles.textdescription_icon)}>
                                                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                                        </i>
                                                        <span>SPECTACULAR THINGS TO DO BEST PLACE TO SEE</span>
                                                    </div>
                                                    <div className={clsx(styles.textdescription1)}>
                                                        <i className={clsx(styles.textdescription_icon)}>
                                                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                                        </i>
                                                        <span>LOCAL GUIDE AVAILABLE</span>
                                                    </div>
                                                    <div className={clsx(styles.textdescription1)}>
                                                        <i className={clsx(styles.textdescription_icon)}>
                                                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                                        </i>
                                                        <span>ALL INCLUSIVE FAMILY HOLIDAY FOR ALL SEASON</span>
                                                    </div>
                                                </div>
                                                <Button carousel_button btn btn__primary btn__size_l>
                                                    {slide.button}
                                                    <span className={clsx(styles.carousel_button_art)}>$25</span>
                                                </Button>
                                            </div>
                                        </>
                                    )
                                    }</div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Herosection