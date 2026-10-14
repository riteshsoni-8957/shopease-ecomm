import React from 'react'

function Testimonials() {
  return (
    <div className='flex flex-col gap-8 px-6 sm:px-12 md:px-18 pt-8 pb-16 w-full shadow-sm'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold font-serif'>
        Customer Reviews
      </h1>

      <div className='flex flex-wrap justify-between gap-16 '>
        <div className='flex gap-3 items-center justify-center border border-gray-300 shadow-sm px-4 py-2 rounded-l-full hover:scale-105 transition duration-300'>
          <img 
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzfiTe9JPtqkcHIjtZxko0EfEpJh2Cvd3I2k5xIJvt095uCx4zu6gKYw&s=10"}
            alt="customer img" 
            className='w-16 h-16 rounded-full object-cover object-center'
          />
          <div>
            <h1 className='font-bold text-sm min-[400px]:text-lg'>Rahul Sharma</h1>
            <p className='text-gray-600 w-45 min-[400px]:w-55 min-[500px]:w-65 text-[12px] min-[400px]:text-sm'>Great products and excellent customer service!</p>
          </div>
        </div>

        <div className='flex gap-3 items-center justify-center border border-gray-300 shadow-sm px-4 py-2 rounded-l-full hover:scale-105 transition duration-300'>
          <img 
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RcXogNt1_4-4ZWN3tbuoHgQG0XDN7LHred-GWD44tw&s"} 
            alt="customer img" 
            className='w-16 h-16 rounded-full object-cover object-center'
          />
          <div>
            <h1 className='font-bold text-sm min-[400px]:text-lg'>Priya Patel</h1>
            <p className='text-gray-600 w-45 min-[400px]:w-55 min-[500px]:w-65 text-[12px] min-[400px]:text-sm'>Fast shipping and quality products. Highly recommended!</p>
          </div>
        </div>

        <div className='flex gap-3 items-center justify-center border border-gray-300 shadow-sm px-4 py-2 rounded-l-full hover:scale-105 transition duration-300'>
          <img 
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdCVWjcu5JvyCFc2BtaTP_bcozT5TYSeWttc9VQjMpe0VgIbVf2DJe4rd&s=10"}
            alt="customer img" 
            className='w-16 h-16 rounded-full object-cover object-center'
          />
          <div>
            <h1 className='font-bold text-sm min-[400px]:text-lg'>Suresh Kumar</h1>
            <p className='text-gray-600 w-45 min-[400px]:w-55 min-[500px]:w-65 text-[12px] min-[400px]:text-sm'>Best online shopping experience I&apos;ve ever had.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials