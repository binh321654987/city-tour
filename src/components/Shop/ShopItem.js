import React from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import styles from './shop.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar, faCheck
} from '@fortawesome/free-solid-svg-icons'

const ShopItem = ({ img, header, price1, price2, click, hidden }) => {
    const show = hidden ? "" : "hidden"

    return (
        <div className={clsx(styles.cart__item)}>
            <img src={img} alt="" />
            <div className={clsx(styles.cart__content)}>
                <h2 className={clsx(styles.cart__header)}>
                    {header}
                </h2>
                <div className={clsx(styles.cart__star)}>
                    <FontAwesomeIcon className={styles.cart__star_icon} icon={faStar} />
                    <FontAwesomeIcon className={styles.cart__star_icon} icon={faStar} />
                    <FontAwesomeIcon className={styles.cart__star_icon} icon={faStar} />
                    <FontAwesomeIcon className={styles.cart__star_icon} icon={faStar} />
                    <FontAwesomeIcon className={styles.cart__star_icon} icon={faStar} />
                </div>
                <div className={clsx(styles.cart__price)}>
                    <span>{price1}</span>
                    <span>{price2}</span>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column'}} >
                <button className={clsx(styles.cart__button)} onClick={click}>
                    ADD TO CART
                    <FontAwesomeIcon className={clsx(styles.cart__star_icon, {[styles.hidden]: show})} style={{ padding: "0 0 0 5px" }} icon={faCheck} />
                </button>
                <Link to="/cart" >
                    <button className={clsx(styles.cart__button, {[styles.hidden]: show})} style={{
                        backgroundColor: "#1bbc9b",
                        color: "#fff",
                        transition: "1s all ease-in-out",
                    }}
                    >VIEW CART</button>
                </Link>
            </div>
        </div>
    )
}

export default ShopItem