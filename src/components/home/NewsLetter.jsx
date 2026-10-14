import React from 'react'

function NewsLetter() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center gap-8  px-6 sm:px-12 md:px-18 lg:px-24 xl:px-30 pt-8 pb-16 w-full'>
      <div className='flex flex-col gap-3'>
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold '>
          Subscribe to Our NewsLetter
        </h1>
        <p className='text-[16px] md:text-lg text-gray-400 font-mono'>
          Get the latest update and offer
        </p>
      </div>

      <div className=''>
        <form action="" className='flex flex-wrap gap-6'>
          <input 
            type="email"
            placeholder='Enter your email address'
            name='email'
            required 
            className=' border border-gray-500 hover:border-2 hover:border-blue-400 hover:scale-103 transition duration-300 rounded-xl px-4 py-2 '
          />
          <button type='submit' className='bg-green-800 hover:bg-green-800/80 px-4 py-1 rounded-4xl text-lg font-semibold cursor-pointer text-gray-300 hover:text-gray-800'>
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter