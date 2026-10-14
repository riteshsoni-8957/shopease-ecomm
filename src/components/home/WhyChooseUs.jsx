import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import { GiReturnArrow } from 'react-icons/gi'
import { MdOutlinePayment, MdOutlineSupportAgent } from 'react-icons/md'

function WhyChooseUs() {
  return (
    <div className='flex flex-col gap-8 px-6 sm:px-12 md:px-18 pt-8 pb-16 w-full shadow-sm'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold font-serif'>
            Why Choose Us
        </h1>

        <div className='flex flex-wrap justify-between gap-16 '>
            <div className='flex gap-3 items-center justify-center text-green-800'>
                <CiShoppingCart className='w-10 h-10' />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-semibold'>
                        Free Shoping
                    </h1>
                    <p className='text-lg font-light font-serif text-gray-700'>
                        On Order over ₹1999
                    </p>                    
                </div>
            </div>

            <div className='flex gap-3 items-center justify-center text-green-800'>
                <MdOutlinePayment className='w-10 h-10' />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-semibold'>
                        Secure Payment 
                    </h1>
                    <p className='text-lg font-light font-serif text-gray-700'>
                        100% Secure
                    </p>                    
                </div>
            </div>

            <div className='flex gap-3 items-center justify-center text-green-800'>
                <MdOutlineSupportAgent className='w-10 h-10' />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-semibold'>
                        24/7 Support
                    </h1>
                    <p className='text-lg font-light font-serif text-gray-700'>
                        We are here to help
                    </p>                    
                </div>
            </div>

            <div className='flex gap-3 items-center justify-center text-green-800'>
                <GiReturnArrow className='w-10 h-10' />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-semibold'>
                        Easy Returns
                    </h1>
                    <p className='text-lg font-light font-serif text-gray-700'>
                        Hassle-free, reliable
                    </p>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs