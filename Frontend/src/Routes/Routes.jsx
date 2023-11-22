import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Signup from '../Pages/Signup';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact'
import DoctorsDetail from '../Pages/Doctors/DoctorsDetails'
import Login from '../Pages/Login'
import Doctors from '../Pages/Doctors/Doctors'
import Home from '../Pages/Home'; // Import the Home component
import About from '../Components/About/About';
import DoctorsDetails from '../Pages/Doctors/DoctorsDetails';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Home"  element={<Home/>}/>
      <Route path="/Contact"  element={<Contact/>}/>
      <Route path="/Login"  element={<Login/>}/>
      <Route path="/Register"  element={<Signup/>}/>
      <Route path="/Services"  element={<Services/>}/>
      <Route path="/Doctors"  element={<Doctors/>}/>
      <Route path="/DoctorsDetails/:id"  element={<DoctorsDetails/>}/>
      <Route path="/Home"  element={<Home/>}/>
      <Route path="/About"  element={<About/>}/>
    </Routes>
  )
}

export default AppRoutes;
