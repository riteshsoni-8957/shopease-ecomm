import React from 'react'
import { Trash3 } from 'reicon-react';

function AllCarts({carts}) {
    var quantity = 1;
    // function editQuantity (a){
    //     if(a) {
    //         quantity += 1;
    //     }
    //     else{
    //         quantity -= 1;
    //     }
    // }

  return (
    <div className='w-full flex flex-col lg:flex-row gap-5'>
        {/* products box */}
        <div className='lg:w-[65%] flex flex-col bg-white shadow-sm px-4 md:px-6 py-6 rounded-xl'>
            <div className='flex flex-row justify-between pb-2 border-b border-gray-700'>
                <h1 className='text-lg font-semibold text-gray-900 '>
                    Products
                </h1>
                <p className='hidden md:block text-lg font-extralight text-gray-800 '>
                    Price
                </p>
                <p className='hidden md:block text-lg font-extralight text-gray-800 '>
                    Quantity
                </p>
                <p className='hidden md:block text-lg font-extralight text-gray-800 mr-12'>
                    Total
                </p>            
            </div>

            <div className='flex flex-col'>
                {
                    carts.map((cart) => {
                        return (
                            <div key={cart.id} className='flex flex-row items-center gap-4 min-[490px]:gap-10 min-[590px]:gap-16 md:gap-2 border-b border-gray-300 py-4'>
                                <img 
                                    src={cart.images[0]} 
                                    alt={cart.subcategory}
                                    className='w-15 h-15 min-[390px]:w-20 min-[390px]:h-20 min-[490px]:w-25 min-[490px]:h-25 md:w-15 md:h-15 object-cover object-center border-2 border-gray-200 rounded-xl overflow-hidden'
                                />

                                <div className='md:w-full flex flex-col md:flex-row gap-1 md:gap-10 lg:gap-6 xl:gap-20 2xl:gap-32'>
                                    <div className='w-fit flex flex-col'>
                                        <h1 className='whitespace-nowrap text-[16px] min-[390px]:text-lg min-[590px]:text-2xl md:text-[16px] lg:text-[12px] font-bold'>
                                            {cart.name}
                                        </h1>
                                        <p className='whitespace-nowrap text-[11px] min-[390px]:text-[13px] min-[590px]:text-[17px] md:text-[11px] lg:text-[9px] font-semibold font-mono text-gray-600'>
                                            Color: {cart.colors[0]} | Size: {cart.sizes[0]}
                                        </p>
                                    </div>

                                    <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center'>
                                        <h1 className='text-sm min-[390px]:text-[16px] min-[590px]:text-xl md:text-sm lg:text-[12px] font-semibold font-mono text-gray-600'>
                                            ₹ {cart.price}
                                        </h1>

                                        <div className='w-fit flex items-center justify-center gap-4 rounded-2xl border border-gray-300 text-xl px-4 mt-1'>
                                            <button className='cursor-pointer'>
                                                -
                                            </button>
                                                {quantity}
                                            <button className='cursor-pointer'>
                                                +
                                            </button>
                                        </div>

                                        <h1 className='hidden md:block text-sm min-[390px]:text-[16px] min-[590px]:text-xl md:text-sm font-semibold font-mono text-gray-600'>
                                            ₹ {cart.price}
                                        </h1>                                        
                                    </div>
                                </div>

                                <div className='hover:scale-110 hover:text-red-400'>
                                    <Trash3 size={24} weight="Filled" />
                                </div>
                            </div>
                        )
                    })
                }            
            </div>
        </div>

        {/* Order summary box */}
        <div className='lg:w-[35%] bg-blue-600 rounded-xl'>

        </div>
    </div>
  )
}

export default AllCarts