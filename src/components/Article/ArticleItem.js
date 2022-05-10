import React from 'react'
import { Link } from 'react-router-dom'

import clsx from 'clsx'
import styles from './acticle.module.css'
import Button from '../Button'

const ArticleItem = ({ to,title, header, description,colorcontent,colortext, colorbutton,img, rowreverse }) => {
    return (
        <Link to={to} className={clsx(styles.acticle_item, {[styles.rowreverse]: rowreverse})}>
            <img className={clsx(styles.acticle_item__img)} src={img} alt="" />
            <div className={clsx(styles.acticle_item__content)} style={{background:`${colorcontent}`,color:`${colortext}`}}>
                <p className={clsx(styles.acticle_item__title)}>{title}</p>
                <h3 className={clsx(styles.acticle_item__header)}>
                    {header}
                </h3>
                <span>{description}</span>
                <Button btn btn__size_m color={colorbutton} colorcontent={colorcontent}>Read more</Button>
            </div>
        </Link>
    )
}

export default ArticleItem