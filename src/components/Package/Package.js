import React from 'react'

import styles from './package.module.css'
import '../Grid.css'
import clsx from 'clsx'
import Button from '../Button'
import Packages from './Packages'

const Package = () => {
    return (
        <div id="packages" className={clsx(styles.package)}>
            <div className={clsx('grid', 'wide')}>
                <div className={clsx("row")}>
                    <div className={clsx("col l-8 c-12", styles.package_text)}>
                        <p>WALK TOUR AND SUGWAY</p>
                        <h1 className={clsx(styles.package_text__heading)}>The Paris <span>Experience</span> !</h1>
                        <div className={clsx(styles.package_text__content)}>
                            <span>Lorem ipsum dolor sit amet, consect etur adip iscing elit.
                                Proin rhoncus urn a dictum neque molestie ultricies.
                            </span>
                            <span>
                                Lorem ipsum dolor sit amet, consect etur adip iscing elit.
                                Proin rhoncus urn a dictum neque molestie ultricies.
                            </span>
                        </div>
                        <Button btn btn__primary btn__size_l package_btn>View all package</Button>
                    </div>
                    <div className={clsx("col l-4 c-12", styles.package_video)}>

                    </div>
                </div>
                <div className={clsx("row")}>
                    <div className={clsx(styles.package_item)}>
                        <Packages
                            src={require("../../assets/img/package-01.jpg")}
                            color='linear-gradient(to right, #ffd205 0%, #ff9b05 100%)'
                        >
                            700$
                        </Packages>
                        <Packages
                            src={require("../../assets/img/package-02.jpg")}
                            color='linear-gradient(to right, #f76570 0%, #f78d65 100%)'
                        >
                            700$
                        </Packages>
                        <Packages
                            src={require("../../assets/img/package-03.jpg")}
                            color='linear-gradient(to right, #ba71da 0%, #da717b 100%)'
                        >
                            700$
                        </Packages>
                        <Packages
                            src={require("../../assets/img/package-04.jpg")}
                            color='linear-gradient(to right, #14b9d5 0%, #14d5b1 100%)'
                        >
                            700$
                        </Packages>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Package