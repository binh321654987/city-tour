import React from 'react'
import { Link } from 'react-router-dom'

import styles from './tour.module.css'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button'


const TourItem = ({
    title,
    namelocation,
    src,
    colorbut,
    salename1,
    salename2,
    salename3,
    price,
    description,
    buttonname,
    tour_icco,
    tour_iconsrc
}) => {
    return (
        <div className={clsx(styles.tour_item)}>
            <div className={styles.tour_item_img}>
                <img src={src} alt="" />
            </div>
            <div className={clsx(styles.tour_item_content)}>
                <div className={clsx(styles.tour_item_name, styles.c)}>
                    <Link className={clsx(styles.tour_item_namehead)} to="/">{title}</Link>
                    <Link className={clsx(styles.tour_item_namelocation)} to="">
                        <FontAwesomeIcon className={clsx(styles.tour_item_nameicon)} icon={faAngleLeft}></FontAwesomeIcon>
                        {namelocation}
                    </Link>
                </div>
                <div className={clsx(styles.tour_item_sale, styles.c)}>
                    <div className={clsx(styles.tour_item_salename)}>
                        <h6 className={clsx(styles.tour_item_salename1)}>
                            {salename1}
                        </h6>
                        <div className={clsx(styles.tour_item_salename2)}>
                            {salename2}
                            <span className={clsx(styles.tour_item_salename3)}>{salename3}</span>
                        </div>
                    </div>
                    <span className={clsx(styles.tour_item_salecoin)}>{price}</span>
                </div>
                <div className={clsx(styles.tour_item_text)}>
                    {description}
                </div>
                <Button btn btn__primary btn__size_s color={colorbut}>{buttonname}</Button>
            </div>
            <div className={clsx(styles.tour_ic)} style={{ background: `${tour_icco}` }}>
                <img className={clsx(styles.tour_icon)} src={tour_iconsrc} alt="" />
            </div>
        </div>
    )
}

export default TourItem