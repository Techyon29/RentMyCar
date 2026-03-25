import React from 'react'
import {Outlet, Route,Routes} from 'react-router'
import Car from './Pages/Car'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route  index element={<Home/>} />
      <Route element={<Car/>} path='/Car'/>
      <Route element={<Service/> } path='/service' />
      <Route element={ <Contact/>} path='/contact' />
      </Route>
    </Routes>
    </>
  )
}

export default App