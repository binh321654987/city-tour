import React from 'react'

import styles from './service.module.css'
import clsx from 'clsx'
import Button from '../Button'

const ServiceItem = ({header, description,srcimg, color}) => {
    return (
        <div className={clsx(styles.service_item)}>
            <img className={clsx(styles.service_item__icon)} src={srcimg} alt="" />
            <div className={clsx(styles.service_item__content)}>
                <h3 className={clsx(styles.service_item__header)}>
                    {header}
                </h3>
                <span>{description}</span>
                <Button btn btn__size_m color={color}>View more</Button>
            </div>
        </div>
    )
}

export default ServiceItem