import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages';
import Search2 from './pages/Search-2';
import Packages from './pages/Packages';
import Shop from './pages/Shop'
import Cart from './pages/Cart'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/city-tour" element={<Home />} />
        <Route path="search-2" element={<Search2 />} />
        <Route path="packages" element={<Packages />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;