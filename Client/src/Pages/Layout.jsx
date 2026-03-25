import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const Layout = () => {
  return (
    <div className=''>
        {/* Navbar */}
        <section>
            <Navbar/>
        </section>
        <Outlet/>
    </div>
  )
}

export default Layout