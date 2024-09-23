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
import Spin from './pages/Spin'
import Home from './pages/Home'
import Signup from './pages/Signup'
import RegistrationForm from './pages/RegisterationForm'
import Register from './pages/Register'
function App() {
 
  return (
    <>
 <Router>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/tournament" element={<Tournament/>}/>
  <Route path="/blogs" element={<Blog/>}/>
  <Route path="/blogs/blog" element={<Fullblog/>}/>
  <Route path="/quiz" element={<Spin/>}/>
 </Routes>
 </Router>
    </>
  )
}

export default App
