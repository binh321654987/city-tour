import React from 'react'

import '../components/Grid.css';

import Navbar from '../components/Navbar'
import Hero1img from '../components/Herosection/Hero1img'
import Footer from '../components/Footer'
import CartItem from '../components/Cart'

import {motion} from 'framer-motion'

const Cart = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Navbar buttonnav="#f76570" />
      <Hero1img img={require("../assets/img/Cart.jpg")}>Cart</Hero1img>
      <CartItem />
      <Footer />
    </motion.div>
  )
}

export default Cart