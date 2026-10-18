import React from 'react'
import AllCarts from './AllCarts'

function CartPage({carts}) {
  return (
    <div className='flex flex-col bg-gray-100'>
        <div className='w-full flex flex-col px-6 py-8'>
            <h1 className='text-lg sm:text-xl md:text-2xl font-bold font-black'>
                Your Carts ({
                    carts.length === 0 ? "No" : carts.length
                } items)
            </h1>
            <p className='text-sm font-mono text-gray-600'>
                Review your items and proceed to checkout
            </p>
        </div>

        <div className='flex mx-6'>
            <AllCarts carts={carts} />
        </div>
    </div>
  )
}

export default CartPage