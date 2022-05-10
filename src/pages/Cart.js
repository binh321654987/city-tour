import React from 'react'

import '../components/Grid.css';
import clsx from 'clsx'
import styles from '../components/Tour/tour.module.css'

import Navbar from '../components/Navbar'
import Hero1img from '../components/Herosection/Hero1img'
import Footer from '../components/Footer'
import CartItem from '../components/Cart'

const Cart = () => {
  return (
    <>
      <Navbar buttonnav="#f76570" />
      <Hero1img img={require("../assets/img/Cart.jpg")}>Cart</Hero1img>
      <CartItem />
      <Footer />
    </>
  )
}

export default Cart