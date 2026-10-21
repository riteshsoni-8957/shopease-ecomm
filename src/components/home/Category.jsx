import React from 'react'
import { getCategories } from '@/api/categories'
import Link from 'next/link'

async function Category() {
  const categories = await getCategories();
  console.log("Categories: ", categories);

  return (
    <div className='flex flex-col px-6 sm:px-12 md:px-18 py-12 w-full'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl mb-8 lg:mb-12 font-bold font-serif text-gray-900'>
        Shop By Category
      </h1>
      
      <div className='flex flex-row overflow-hidden text-center gap-13 sm:ml-8'>
        {
          categories.map((category) => (
            <div key={category.id} className=''>
              <Link href={`products?category=${encodeURIComponent(category.name)}`} className='w-18 md:w-22 xl:w-26 2xl:w-30 h-full flex flex-col items-center justify-center space-y-2 lg:space-y-4 font-mono cursor-pointer hover:scale-110 transition duration-300'>
                <img 
                  src={category.image} 
                  alt={category.slug} 
                  className='w-18 h-18 md:w-22 md:h-22 xl:w-26 xl:h-26 2xl:w-30 2xl:h-30 object-cover object-center rounded-full' 
                />
                <h2 className='text-sm md:text-xl font-semibold text-gray-900'>
                  {category.name}
                </h2>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category