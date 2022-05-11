import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;