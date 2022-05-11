import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection/Herosection.js'
import Package from '../components/Package/Package.js'
import Service from '../components/Shop'
import Tour from '../components/Tour'
import Article from '../components/Article'
import Footer from '../components/Footer'
import Buynow from '../components/Buynow'
import SmoothScroll from '../components/SmoothScroll/SmoothScroll'

const Home = () => {

  return (
    <>
      <SmoothScroll>
        <Navbar />
        <Herosection />
        <Package />
        <Service />
        <Tour />
        <Article />
        <Footer />
        <Buynow />
      </SmoothScroll>
    </>
  )
}

export default Home