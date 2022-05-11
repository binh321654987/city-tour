import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection/Herosection.js'
import Package from '../components/Package/Package.js'
import Service from '../components/Shop'
import Tour from '../components/Tour'
import Article from '../components/Article'
import Footer from '../components/Footer'
import Buynow from '../components/Buynow'
import {motion} from 'framer-motion'

const Home = () => {

  return (
    <motion.div
      intial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
        <Navbar />
        <Herosection />
        <Package />
        <Service />
        <Tour />
        <Article />
        <Footer />
        <Buynow />
    </motion.div>
  )
}

export default Home