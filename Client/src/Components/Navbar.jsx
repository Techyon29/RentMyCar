import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className=' w-full px-10 md:px-22 flex justify-between py-4 items-center bg-white'>
        {/* Title */}
        <h1 className=' text-xl md:text-3xl font-bold text-primary '>RentMyCar</h1>
        {/* Links */}
        <ul className='gap-7 text-gray-500 text-sm active:text-secondary font-semibold hidden md:flex'>
            <NavLink to="/" className={({isActive}) => isActive ? "text-secondary border-b-2 pb-1 border-b-secondary" : " pb-1" }  >Home</NavLink>
            <NavLink to="/car" className={({isActive}) => isActive ? "text-secondary border-b-2 pb-1 border-b-secondary" : " pb-1" }>Car</NavLink>
            <NavLink to="/service" className={({isActive}) => isActive ? "text-secondary border-b-2 pb-1 border-b-secondary" : " pb-1" }>Service</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-secondary border-b-2 pb-1 border-b-secondary" : " pb-1" }>Contact</NavLink>
        </ul>
        {/* Side Buttons */}
        <div className=' '>
            <span className=' text-gray-500 cursor-pointer hover:text-secondary'>Login</span>
            <button className=' ml-3 text-white px-4 py-1.5 bg-secondary rounded-full cursor-pointer'>Register</button>
        </div>
    </div>
  )
}

export default Navbar