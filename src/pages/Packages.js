import React from 'react'

import '../components/Grid.css';
import clsx from 'clsx'
import styles from '../components/Tour/tour.module.css'

import Navbar from '../components/Navbar'
import Hero1img from '../components/Herosection/Hero1img'
import Footer from '../components/Footer'
import TourItem from '../components/Tour/TourItem'

const Packages = () => {
  return (
    <>
      <Navbar buttonnav="#f76570" />
      <Hero1img img={require("../assets/img/acticle-3.jpg")}>Archive</Hero1img>
      <div className={clsx(styles.tour)}>
        <div className="grid wide">
            <div className={clsx("row",styles.tour_list)}>
              <div className="col l-4 c-12">
                <TourItem
                  title="Berlin"
                  namelocation="Europe"
                  src={require("../assets/img/tour_image-1.jpg")}
                  salename1="CULTURAL"
                  salename2="RELAX"
                  salename3="+ 1"
                  price="700 $"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque."
                  buttonname="Details"
                  tour_icco={"linear-gradient(to right, #ffd205 0%, #ff9b05 100%)"}
                  tour_iconsrc={require("../assets/img/tour-icon-1.png")}
                />
              </div>
              <div className="col l-4 c-12">
                <TourItem
                  title="Hong Kong"
                  namelocation="Asia"
                  src={require("../assets/img/tour_image-2.jpg")}
                  salename1="HISTORY"
                  salename2="CULTURAL"
                  salename3="+ 1"
                  price="500 $"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque."
                  buttonname="Details"
                  tour_icco={"linear-gradient(to right, #f76570 0%, #f78d65 100%)"}
                  tour_iconsrc={require("../assets/img/tour-icon-2.png")}
                />
              </div>
              <div className="col l-4 c-12">
                <TourItem
                  title="San Francisco"
                  namelocation="Europe"
                  src={require("../assets/img/package-03.jpg")}
                  salename1="HISTORY"
                  salename2="CULTURAL"
                  salename3="+ 1"
                  price="400 $"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque."
                  buttonname="Details"
                  tour_icco={"linear-gradient(to right, #ffd205 0%, #ff9b05 100%)"}
                  tour_iconsrc={require("../assets/img/tour-icon-2.png")}
                />
              </div>
              <div className="col l-4 c-12">
                <TourItem
                  title="San Francisco"
                  namelocation="Europe"
                  src={require("../assets/img/package-04.jpg")}
                  salename1="HISTORY"
                  salename2="CULTURAL"
                  salename3="+ 1"
                  price="1200 $"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque."
                  buttonname="Details"
                  tour_icco={"linear-gradient(to right, #f76570 0%, #f78d65 100%)"}
                  tour_iconsrc={require("../assets/img/tour-icon-2.png")}
                />
              </div>
              <div className="col l-4 c-12">
                <TourItem
                  title="San Francisco"
                  namelocation="Europe"
                  src={require("../assets/img/package-06.jpg")}
                  salename1="HISTORY"
                  salename2="CULTURAL"
                  salename3="+ 1"
                  price="1500 $"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque."
                  buttonname="Details"
                  tour_icco={"linear-gradient(to right, #ffd205 0%, #ff9b05 100%)"}
                  tour_iconsrc={require("../assets/img/tour-icon-2.png")}
                />
              </div>
              <div className="col l-4 c-12">
                <TourItem
                  title="San Francisco"
                  namelocation="Europe"
                  src={require("../assets/img/package-07.jpg")}
                  salename1="HISTORY"
                  salename2="CULTURAL"
                  salename3="+ 1"
                  price="730 $"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque."
                  buttonname="Details"
                  tour_icco={"linear-gradient(to right, #f76570 0%, #f78d65 100%)"}
                  tour_iconsrc={require("../assets/img/tour-icon-2.png")}
                />
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Packages