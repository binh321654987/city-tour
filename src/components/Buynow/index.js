import React from 'react'
import { Link } from 'react-router-dom'

import styles from './buynow.module.css'
import clsx from 'clsx'

const Buynow = () => {
    return (
        <Link to="/shop" className={clsx(styles.buynow)}>
            <div className={clsx(styles.buy_img)}>
                <img src={require("../../assets/img/Buy_icon.png")} alt="" />
            </div>
            <span className={clsx(styles.money_icon)}>$</span>
            <span className={clsx(styles.money)}>54</span>
            <span className={clsx(styles.buynow_text)}>Buy now</span>
        </Link>
    )
}

export default Buynow