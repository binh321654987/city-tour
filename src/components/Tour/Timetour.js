import React from 'react'

import styles from './tour.module.css'
import clsx from 'clsx'
import Button from '../Button'

const Timetour = () => {
    return (
        <div className={clsx(styles.tour_time)}>
            <h4>LAST MINUTE !</h4>
            <h1 className={clsx(styles.tour_time__underline)}>Summer <span>SALE</span></h1>
            <div className={clsx(styles.tour_time_clock)}>
                <div className={clsx(styles.tour_time_spacetime)}>
                    <h1>000</h1>
                    <h2>Days</h2>
                </div>
                <div className={clsx(styles.tour_time_spacetime)}>
                    <h1>00</h1>
                    <h2>Hours</h2>
                </div>
                <div className={clsx(styles.tour_time_spacetime)}>
                    <h1>00</h1>
                    <h2>Minutes</h2>
                </div>
                <div className={clsx(styles.tour_time_spacetime)}>
                    <h1>00</h1>
                    <h2>Seconds</h2>
                </div>
            </div>
            <Button btn tour_time_clockbtn>check now</Button>
        </div>
    )
}

export default Timetour