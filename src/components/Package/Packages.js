import React from 'react'
import { Link } from 'react-router-dom'

import styles from './package.module.css'
import Button from "../Button"
import clsx from 'clsx'

const Packages = ({ children, src, color }) => {
    return (
        <Link to="/packages" className={clsx(styles.package_item__list)}>
            <img className={clsx(styles.package_item__img)} src={src} alt="">
            </img>
                <Button package_item__price btn color={color}>{children}</Button>
        </Link>
    )
}

export default Packages