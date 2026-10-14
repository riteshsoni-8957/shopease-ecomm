// it is client side components
"use client";
import React from 'react'
import AllCategories from './AllCategories';

function CategoryPage({ categories, user }) {
  return (
    <div className=''>
        {/* Product Header bg*/}
        <div className='flex flex-col shop-image-bg bg-cover bg-center text-white px-5 min-[400px]:px-10 min-[500px]:px-15 sm:px-20 md:px-30 py-10 gap-3'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold font-serif'>
            Shop All Categories
            </h1>

            <p className='text-lg font-light font-serif text-gray-100'>
            Home &gt; Categories
            </p>
        </div>

        <div className=''>
            <AllCategories categories={categories} user={user} />
        </div>
    </div>
  )
}

export default CategoryPage