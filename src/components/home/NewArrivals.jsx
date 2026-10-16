import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

function NewArrivals() {
  return (
    <div className='flex justify-center flex-wrap px-6 sm:px-12 md:px-18 pt-8 pb-16 lg:py-16 w-full gap-16'>
      <div className='newArrival1-bg w-[380px] bg-right bg-cover rounded-xl px-5 py-8 hover:scale-105 transition duration-300' >
          <h2 className='text-xl font-semibold font-serif'>
            Big Sale
          </h2>
          <p className='text-lg font-medium font-serif'>
            Up To 50% Off
          </p>
          <p className='text-sm font-light font-mono'>
            Limited time offers
          </p>
          <Link 
            href="/products"
            aria-label="Up to 50% sale products"
            className='flex items-center gap-2 mt-2 text-sm font-medium font-serif hover:text-yellow-700 w-fit'
          >
            Shop Now 
            <FaLongArrowAltRight aria-hidden="true"/>
          </Link>  
      </div>

      <div className='newArrival2-bg w-[380px] bg-right bg-cover rounded-xl px-5 py-8 hover:scale-105 transition duration-300' >
          <h2 className='text-xl font-semibold font-serif '>
            Best Sellers
          </h2>
          <p className='text-lg font-medium font-serif'>
            Top 6 most popular
          </p>
          <p className='text-sm font-light font-mono'>
            for everyone
          </p>
          <Link 
            href="/products"
            aria-label="Top 6 most popular products"
            className='flex items-center gap-2 mt-2 text-sm font-medium font-serif hover:text-yellow-700 w-fit'
          >
            Explore
            <FaLongArrowAltRight aria-hidden="true"/>
          </Link>  
      </div>

      <div className='newArrival3-bg w-[380px] bg-right bg-cover rounded-xl px-5 py-8 hover:scale-105 transition duration-300' >
          <h2 className='text-xl font-semibold font-serif '>
            New Arrivals
          </h2>
          <p className='text-lg font-medium font-serif'>
            Fresh styles just for you
          </p>
          <p className='text-sm font-light font-mono'>
            Discover the latest trend
          </p>
          <Link 
            href="/products"
            aria-label="fresh styles products just for you"
            className='flex items-center gap-2 mt-2 text-sm font-medium font-serif hover:text-yellow-700 w-fit'
          >
            Explore
            <FaLongArrowAltRight aria-hidden="true"/>
          </Link>  
      </div>
    </div>
  )
}

export default NewArrivals