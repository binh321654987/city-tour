import React from 'react'

import styles from './buynow.module.css'
import clsx from 'clsx'

const Buynow = () => {
    return (
        <div className={clsx(styles.buynow)}>
            <div className={clsx(styles.buy_img)}>
                <img src={require("../../assets/img/Buy_icon.png")} alt="" />
            </div>
            <span className={clsx(styles.money_icon)}>$</span>
            <span className={clsx(styles.money)}>54</span>
            <span className={clsx(styles.buynow_text)}>Buy now</span>
        </div>
    )
}

export default Buynow