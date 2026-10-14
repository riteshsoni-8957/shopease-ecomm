import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='hero-bg bg-no-repeat bg-center bg-cover w-full min-h-[395px] flex flex-col justify-center space-y-4 px-6 sm:px-12 lg:px-18 py-2 shadow-lg'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl md:w-[50%] font-bold text-gray-900/90'>
        Upgrade Your Style Get Upto 50% Off
      </h1>
      <p className='text-[16px] sm:text-lg md:text-xl md:w-[50%] text-gray-500 font-mono'>
        Discover the latest trends in fashion and elevate your wardrobe with our exclusive collection. Shop now and enjoy unbeatable discounts on your favorite styles.
      </p>
      <Link href='/products' className=''>
        <button className='px-6 pb-2 pt-1 bg-blue-600/60 rounded-[5px] hover:bg-blue-600 transition duration-300 text-gray-50 text-xl font-semibold hover:text-gray-900'>
          Shop Now
        </button>
      </Link>
    </div>
  )
}

export default Hero