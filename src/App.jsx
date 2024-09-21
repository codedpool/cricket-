import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tournament from "./pages/Tournament"
import Blog from './pages/Blog'
import { BrowserRouter as Router } from 'react-router-dom';
 import { Routes ,Route } from 'react-router-dom'
import Fullblog from './pages/Fullblog'
function App() {
 
  return (
    <>
 <Router>
  <Routes>
  <Route path="/" element={<Tournament/>}/>
  <Route path="/blogs" element={<Blog/>}/>
  <Route path="/blogs/blog" element={<Fullblog/>}/>
 </Routes>
 </Router>
    </>
  )
}

export default App
