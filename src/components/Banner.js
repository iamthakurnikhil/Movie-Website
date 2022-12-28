import React from 'react'
import Image from "../assests/banner.jpg";

const Banner = () => {
  return (
    <div className='mt-4 '>
        <div className={`bg-[url(${Image})] md:h-[70vh] h-[40vh] bg-cover bg-center flex items-end`}>
            <div className='text-white w-full text-center text-3xl md:text-5xl bg-gray-900 bg-opacity-50 p-2'>Spiderman: No Way Home</div>
        </div>
    </div>
  )
}

export default Banner