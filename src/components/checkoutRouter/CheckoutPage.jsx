import React from 'react'
import { RepeatOne, ShieldCheck } from 'reicon-react';

function CheckoutPage({product, user}) {
    console.log("checkout product: ", product);
    console.log("checkout user: ", user);

    return (
        <div className='bg-gray-100 w-full h-screen flex flex-col px-6 sm:px-12 md:px-8 lg:px-18 py-12'>
            <div className='mb-8'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-1'>
                    Chcekout 
                </h1>
                <p className='text-sm sm:text-lg md:text-xl font-light font-mono text-gray-800'>
                    Complete your order and get your favorite products delivered.
                </p>                
            </div>

            <div className='flex flex-col gap-3'>
                <div className='flex flex-col md:flex-row gap-3'>
                    {/* address box */}
                    <div className='w-full lg:w-[60%] bg-gray-50 p-4 sm:p-6 border-gray-600 shadow-lg rounded-xl'>
                        <div className='flex flex-col mb-2'>
                            <h2 className='text-[16px] sm:text-lg md:text-xl font-semibold font-serif text-gray-900'>
                                Shipping Address 
                            </h2>
                            <p className='text-sm sm:text-lg md:text-xl font-light font-mono text-gray-800'>
                                Enter your delivery update
                            </p>
                        </div>

                        <form action="">

                        </form>
                    </div>

                    {/* summary box */}
                    <div className='w-full lg:w-[40%] h-fit bg-gray-50 p-4 sm:p-6 xl:px-10 border-gray-600 shadow-lg rounded-xl'>
                        <h2 className='text-[16px] sm:text-lg md:text-xl font-semibold font-serif text-gray-900 border-b border-gray-400 pb-3'>
                            Order Summary
                        </h2>

                        <div className='flex flex-row items-center gap-3 sm:gap-5 md:gap-6 border-b border-gray-400 py-4'>
                            <img 
                                src={product.images[0]}
                                alt={product.subcategory} 
                                className='w-15 h-15 min-[390px]:w-20 min-[390px]:h-20 min-[490px]:w-25 min-[490px]:h-25 object-cover object-top border-2 border-gray-200 rounded-[10px] overflow-hidden'
                            />

                            <div className='w-full flex flex-col gap-0.5'>
                                <h3 className='truncate text-sm min-[390px]:text-[16px] min-[490px]:text-lg sm:text-xl md:text-[16px] lg:text-lg xl:text-xl font-bold '>
                                    {product.name}
                                </h3>
                                <p className='text-sm min-[390px]:text-[16px] min-[490px]:text-lg sm:text-xl md:text-[16px] lg:text-lg xl:text-xl font-light font-serif '>
                                    Color: {product.colors[0]} | Size: {product.sizes[0]}                                
                                </p>
                                <p className='text-sm min-[390px]:text-[16px] min-[490px]:text-lg sm:text-xl md:text-[16px] lg:text-lg xl:text-xl font-semibold'>
                                    ₹{product.price}
                                </p>
                                <div className='flex flex-row justify-between'>
                                    <p className='text-sm min-[390px]:text-[16px] min-[490px]:text-lg sm:text-xl md:text-[16px] lg:text-lg xl:text-xl font-light font-serif '>
                                        Qty: 1
                                    </p>
                                    <p className='text-[16px] min-[390px]:text-lg min-[490px]:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl text-gray-900 font-semibold '>
                                        ₹{product.price}
                                    </p>                                
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 border-b border-gray-400 py-4'>
                            <div className="w-full flex flex-row justify-between">
                                <p className='text-[16px] min-[390px]:text-lg min-[490px]:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl text-gray-700 font-bold font-mono '>
                                    Subtotal
                                </p>
                                <p className='text-[16px] min-[390px]:text-lg min-[490px]:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl text-gray-900 font-semibold '>
                                    ₹{product.price}
                                </p>
                            </div>

                            <div className="w-full flex flex-row justify-between">
                                <p className='text-[16px] min-[390px]:text-lg min-[490px]:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl text-gray-700 font-bold font-mono '>
                                    Shipping
                                </p>
                                <p className='text-[16px] min-[390px]:text-lg min-[490px]:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl text-green-800 font-bold font-mono '>
                                    Free
                                </p>
                            </div>

                            <div className="w-full flex flex-row justify-between">
                                <p className='text-[16px] min-[390px]:text-lg min-[490px]:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl text-gray-700 font-bold font-mono '>
                                    Tax (including)
                                </p>
                                <p className='text-[16px] min-[390px]:text-lg min-[490px]:text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl text-gray-900 '>
                                    ₹0
                                </p>
                            </div>
                        </div>

                        <div className='w-full flex flex-row justify-between py-4 sm:py-6'>
                            <p className='text-xl min-[390px]:text-2xl min-[490px]:text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-900 font-semibold '>
                                Total
                            </p>
                            <p className='text-xl min-[390px]:text-2xl min-[490px]:text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl text-green-800 font-bold font-mono '>
                                ₹{product.price}
                            </p>
                        </div>

                        <div className='flex flex-row gap-2 items-center bg-green-500/20 text-green-800 p-3 justify-center rounded-2xl'>
                            <ShieldCheck size={36} />
                            <div className='flex flex-col'>
                                <p className='text-sm min-[390px]:text-[16px] min-[490px]:text-lg sm:text-xl md:text-[16px] lg:text-lg xl:text-xl font-bold  '>
                                    100% Secure Payments
                                </p>
                                <p className='text-sm min-[390px]:text-[16px] min-[490px]:text-lg sm:text-xl md:text-[16px] lg:text-lg xl:text-xl text-gray-800 font-light font-serif '>
                                    Your data is safe with us
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* payment box */}
                <div className='w-full md:w-[50%] lg:w-[60%] bg-gray-50 p-4 sm:p-6 border-gray-600 shadow-lg rounded-xl'>
                    <div className='flex flex-col mb-2'>
                        <h2 className='text-[16px] sm:text-lg md:text-xl font-semibold font-serif text-gray-900'>
                            Payment Method 
                        </h2>
                        <p className='text-sm sm:text-lg md:text-xl font-light font-mono text-gray-800'>
                            Choose your Prefered payment option
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CheckoutPage