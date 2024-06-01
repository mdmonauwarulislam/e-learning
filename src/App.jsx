// import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Views/Home'
import Contact from './Views/Contact'
import About from './Views/About'
import Course from "./Views/Course"


function App() {
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
