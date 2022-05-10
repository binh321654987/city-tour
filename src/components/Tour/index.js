import React from 'react'

import styles from './tour.module.css'
import "../Grid.css"
import clsx from 'clsx'

import Timetour from './Timetour'
import TourItem from './TourItem'

const Tour = () => {
    return (
        <div id="tour" className={clsx(styles.tour)}>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-3 c-12">
                        <Timetour />
                    </div>
                    <div className="col l-9 c-12">
                        <div className={clsx(styles.tour_list)}>
                            <div className="col l-6 c-12">
                                <TourItem
                                    title="Berlin"
                                    namelocation="Europe"
                                    src={require("../../assets/img/tour_image-1.jpg")}
                                    colorbut="#ffd205"
                                    salename1="CULTURAL"
                                    salename2="RELAX"
                                    salename3="+ 1"
                                    price="700 $"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque."
                                    buttonname="Details"
                                    tour_icco={"linear-gradient(to right, #ffd205 0%, #ff9b05 100%)"}
                                    tour_iconsrc={require("../../assets/img/tour-icon-1.png")}
                                />
                            </div>
                            <div className="col l-6 c-12">
                                <TourItem
                                    title="Hong Kong"
                                    namelocation="Europe"
                                    src={require("../../assets/img/tour_image-2.jpg")}
                                    colorbut="#f76570"
                                    salename1="HISTORY"
                                    salename2="CULTURAL"
                                    salename3="+ 1"
                                    price="700 $"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque."
                                    buttonname="Details"
                                    tour_icco={"linear-gradient(to right, #f76570 0%, #f78d65 100%)"}
                                    tour_iconsrc={require("../../assets/img/tour-icon-2.png")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tour