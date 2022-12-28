import React from 'react'
import Image from '../assests/logo.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='flex space-x-8 px-10 mt-4 items-center'>
        <img src={Image} className="w-[40px] md:w-[60px]"></img>
        <Link to='/' className='text-blue-400 font-bold md:text-3xl text-xl'>Movies </Link>
        <Link to='/favourites' className='text-blue-400 font-bold md:text-3xl text-xl '>Favourites</Link>
    </div>
  )
}

export default NavBar