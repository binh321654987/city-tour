import React from 'react'

import styles from './service.module.css'
import clsx from 'clsx'
import ServiceItem from './ServiceItem'

const Service = () => {
    return (
        <div className={clsx(styles.service)}>
            <div className={clsx("grid")}>
                <div className={clsx(styles.service_header)}>
                    <h4>MULTIPLE BENEFITS INCLUDED</h4>
                    <h1 className={clsx(styles.service_header__main)}>OUR <span>SERVICES</span></h1>
                </div>
                <div className={clsx("grid wide")}>
                    <div className={clsx("row")}>
                        <div className={clsx("col l-4 c-12")}>
                            <ServiceItem
                                header={"Insurance"}
                                description={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."}
                                srcimg={require("../../assets/img/service_icon_1.png")}
                                color={"#1bbc9b"}
                            />
                        </div>
                        <div className={clsx("col l-4 c-12")}>
                            <ServiceItem
                                header={"Medical Care"}
                                description={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."}
                                srcimg={require("../../assets/img/service_icon_2.png")}
                                color={"#ff6868"}
                            />
                        </div>
                        <div className={clsx("col l-4 c-12")}>
                            <ServiceItem
                                header={"Meals Included"}
                                description={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."}
                                srcimg={require("../../assets/img/service_icon_3.png")}
                                color={"#14b9d5"}
                            />
                        </div>
                        <div className={clsx("col l-4 c-12")}>
                            <ServiceItem
                                header={"Accessibility"}
                                description={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."}
                                srcimg={require("../../assets/img/service_icon_4.png")}
                                color={"var(--primary-color)"}
                            />
                        </div>
                        <div className={clsx("col l-4 c-12")}>
                            <ServiceItem
                                header={"Customer Care"}
                                description={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."}
                                srcimg={require("../../assets/img/service_icon_5.png")}
                                color={"#c755da"}
                            />
                        </div>
                        <div className={clsx("col l-4 c-12")}>
                            <ServiceItem
                                header={"Shuttle Included"}
                                description={"Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum."}
                                srcimg={require("../../assets/img/service_icon_6.png")}
                                color={"#ff6868"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service