
import React from 'react'; // Import React
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route components
import Home from './Views/Home'; // Import Home component
import Contact from './Views/Contact'; // Import Contact component
import Course from './Views/Course'; // Import Course component
import About from './Views/About'; // Import About component
import Header from './Components/Header/Header'; // Import Header component
import Footer from './Components/Footer/Footer'; // Import Footer component
import PricingPage from './Views/PricingPage';

function App() {
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Pricing' element={<PricingPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
