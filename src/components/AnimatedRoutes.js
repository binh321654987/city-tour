import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages';
import Search2 from '../pages/Search-2';
import Packages from '../pages/Packages';
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'

import { AnimatePresence } from "framer-motion"

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/city-tour" element={<Home />} />
                <Route path="/search-2" element={<Search2 />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes