import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import clsx from 'clsx'
import styles from './button.module.css'


const Button = ({ 
    children,  
    btn__size_s,
    btn__size_m,
    btn__size_l,
    btn__size_xl,
    btn__primary,
    carousel_button,
    package_btn,
    package_item__price,
    tour_time_clockbtn,
    color,
    colorcontent
    }) => {
    const classes = clsx(styles.btn,
        {
            [styles.btn__size_s]: btn__size_s,
            [styles.btn__size_m]: btn__size_m,
            [styles.btn__size_l]: btn__size_l,
            [styles.btn__size_xl]: btn__size_xl,
        },
        {
            [styles.btn__primary]: btn__primary
        },
        {
            [styles.carousel_button]: carousel_button,
            [styles.package_btn]: package_btn,
            [styles.package_item__price]: package_item__price,
            [styles.tour_time_clockbtn]: tour_time_clockbtn
        })
        const toggleHome = () => {
            scroll.scrollToTop()
          }
    return (
            <button onClick={toggleHome} className={classes} style={{background: `${color}`,color:`${colorcontent}`}}>
                {children}
            </button>
    )
}

export default Button