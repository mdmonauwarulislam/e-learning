

import { Routes, Route, } from 'react-router-dom'; // Import Routes and Route components
import Home from './Views/Home'; // Import Home component
import Contact from './Views/Contact'; // Import Contact component
import Course from './Views/Course'; // Import Course component
import About from './Views/About'; // Import About component
import Header from './Components/Header/Header'; // Import Header component
import Footer from './Components/Footer/Footer'; // Import Footer component
import PricingPage from './Views/PricingPage';
import Login from './Views/Login';
import Signup from './Views/Signup';
import CourseOpen from './Views/CourseOpen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Course' element={<Course />} />
        <Route path='/CourseOpen' element={<CourseOpen />} />
        <Route path='/About' element={<About />} />
        <Route path='/Pricing' element={<PricingPage />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
    
    
  )
}

export default App
