"use client";
import { ArrowRight, LockKeyhole2, Trash3 } from 'reicon-react';
import Link from 'next/link';
import { deleteCartAction } from '../../serverAction/auth';

function AllCarts({carts}) {
    var quantity = 1;
    // const [selectedCarts, setSelectedCarts] = useState([])
    // function editQuantity (a){
    //     if(a) {
    //         quantity += 1;
    //     }
    //     else{
    //         quantity -= 1;
    //     }
    // }

    var totalPrice = 0;
    carts.map((cart) => {
        totalPrice += Number(cart.price);
    })

    console.log("Total cart price:.. ", totalPrice);
    

    return (
        <div className='w-full flex flex-col lg:flex-row gap-5'>
            {/* products box */}
            <div className='lg:w-[65%] min-h-118 flex flex-col bg-white shadow-sm px-4 md:px-6 py-6 rounded-xl'>
                {
                    carts.length !== 0 ? (
                        <>
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
                                            <div 
                                                key={cart.id} 
                                                className='flex flex-row items-center gap-4 min-[490px]:gap-10 min-[590px]:gap-16 md:gap-2 border-b border-gray-300 py-4'
                                            >
                                                <Link href={`products/${cart.productId}`}>
                                                    <img 
                                                        src={cart.images[0]} 
                                                        alt={cart.subcategory}
                                                        className='w-15 h-15 min-[390px]:w-20 min-[390px]:h-20 min-[490px]:w-25 min-[490px]:h-25 md:w-15 md:h-15 object-cover object-top border-2 border-gray-200 rounded-xl overflow-hidden'
                                                    />                                                
                                                </Link>

                                                <Link href={`products/${cart.productId}`} className='md:w-full flex flex-col md:flex-row gap-1 md:gap-10 lg:gap-6 xl:gap-20 2xl:gap-32'>
                                                    <div className='w-fit flex flex-col'>
                                                        <h1 className='whitespace-nowrap text-[16px] min-[390px]:text-lg min-[590px]:text-2xl md:text-[16px] lg:text-[12px] font-bold truncate md:w-35'>
                                                            {cart.name}
                                                        </h1>
                                                        <p className='whitespace-nowrap text-[11px] min-[390px]:text-[13px] min-[590px]:text-[17px] md:text-[11px] lg:text-[9px] font-semibold font-mono text-gray-600 truncate md:w-35'>
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
                                                </Link>

                                                <form action={deleteCartAction.bind(null, cart.id)}>
                                                    <button type='submit' className='hover:scale-110 hover:text-red-400'>
                                                        <Trash3 size={24} weight="Filled" />
                                                    </button>                                                
                                                </form>
                                            </div>
                                        )
                                    })
                                }            
                            </div>                     
                        </>
                    
                    ) : (
                        <>
                            <div className='w-full h-100 flex items-center justify-center'>
                                <div className='flex text-sm min-[500px]:text-xl sm:text-2xl lg:text-3xl space-x-2'>
                                    <h1>Please</h1>
                                    <Link href="/products" className='text-red-500 hover:underline'>
                                        Add to Cart
                                    </Link>
                                    <h1> From Products List</h1>
                                </div>
                            </div>                      
                        </>
                    )
                }
            </div>

            {/* Order summary box */}
            <div className=' lg:w-[35%] h-100 flex flex-col bg-white shadow-sm px-4 md:px-6 py-6 rounded-xl'>
                <h1 className='text-xl min-[480px]:text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-950 font-serif'>
                    Order Summary
                </h1>

                <div className='flex flex-row justify-between border-b border-gray-300 py-3'>
                    <p className='text-[16px] min-[480px]:text-lg sm:text-xl lg:text-lg xl:text-xl text-gray-700 font-medium'>
                        Subtotal
                    </p>
                    <p className='text-[16px] min-[480px]:text-lg sm:text-xl lg:text-lg xl:text-xl text-gray-800 font-semibold font-mono'>
                        ₹{totalPrice}
                    </p>
                </div>

                <div className='flex flex-row justify-between py-3'>
                    <p className='text-[16px] min-[480px]:text-lg sm:text-xl lg:text-lg xl:text-xl text-gray-700 font-medium'>
                        Shiping
                    </p>
                    <p className='text-[16px] min-[480px]:text-lg sm:text-xl lg:text-lg xl:text-xl text-green-600 font-semibold'>
                        Free
                    </p>
                </div>

                <div className='flex flex-row justify-between border-b border-gray-300 py-3'>
                    <p className='text-[16px] min-[480px]:text-lg sm:text-xl lg:text-lg xl:text-xl text-gray-700 font-medium'>
                        Tax(Included)
                    </p>
                    <p className='text-[16px] min-[480px]:text-lg sm:text-xl lg:text-lg xl:text-xl text-gray-800 font-semibold'>
                        ₹0
                    </p>
                </div>
                
                <div className='flex flex-row justify-between py-6'>
                    <p className='text-lg min-[480px]:text-xl sm:text-2xl lg:text-xl xl:text-2xl text-gray-700 font-semibold font-serif'>
                        Total
                    </p>
                    <p className='text-lg min-[480px]:text-xl sm:text-2xl lg:text-xl xl:text-2xl text-green-900 font-bold font-mono'> 
                        ₹{totalPrice}
                    </p>
                </div>

                <button className='flex flex-row items-center justify-center bg-green-900/80 hover:bg-green-900 py-3 rounded-lg text-[16px] sm:text-2xl lg:text-xl xl:text-2xl text-gray-200 gap-1 sm:gap-3 '>
                    <LockKeyhole2 size={16} weight="Filled" className='sm:size-6' />
                    Proceed to Checkout 
                    <ArrowRight size={16} weight='Filled' className='sm:size-6' />
                </button>
            </div>
        </div>
    )
}

export default AllCarts