import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/Footer'
import Astoronomy from '../astoronomy/astoronomy'
import Live from '../live/live'
import Support from '../../support/Support'
import Latest from '../latest/Latest'

import Home from '../pages/Home'
import About from '../pages/About'
import Episodes from '../pages/Episodes'
import Contact from '../pages/Contact'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/episodes' element={<Episodes/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
