"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CircleArrowLeft, SearchStatus2, ShieldNetwork } from 'reicon-react';
import { cartAction } from "../../serverAction/auth";

function ProductDetailsPage({user, product, products}) {

    const [randomProducts, setRandomProducts] = useState([]);
    const [isColors, setIsColors] = useState(product.colors[0]);
    console.log("isColors: ", isColors);

    // find and set random products
    useEffect(() => {
        const p = [...products].sort(
            () => Math.random() - 0.5
        );

        setRandomProducts(p.slice(0, 8));
    }, [products]);

    return (
        <div className='flex flex-col px-5 min-[400px]:px-10 min-[500px]:px-15 sm:px-20 md:px-30 py-10 gap-14'>
            <div className='flex flex-col sm:flex-row gap-6 md:gap-10 xl:gap-18 mx-auto'>
                <img 
                    src={product.images[0]}
                    alt={product.slug} 
                    className='w-[250px] sm:w-[250px] md:w-[280px] xl:w-[400px] h-[250px] sm:h-[350px] xl:h-[400px] object-cover object-top rounded-lg'
                />

                <div className='w-[250px] sm:w-[250px] md:w-[280px] xl:w-[400px] h-auto flex flex-col gap-2'>
                    <p className='text-[12px] text-gray-600 font-mono font-light'>
                        Home &gt; Shop &gt; {product.category} &gt; {product.subcategory}
                    </p>

                    <h1 className='text-xl lg:text-2xl xl:text-3xl font-bold'>
                        {product.name}
                    </h1>

                    <p className='text-lg lg:text-xl xl:text-2xl font-semibold font-serif'>
                        ₹{product.price.toFixed(2)}
                    </p>

                    <p className='lg:text-lg xl:text-xl text-gray-600 font-serif'>
                        {product.reviews} reviews
                    </p>

                    <p className={`lg:text-lg xl:text-xl font-medium font-mono ${(isColors) ? "" : "hidden"}`}>
                        Colour
                    </p>

                   <div className='flex gap-3'>
                    {
                        product.colors?.map((color, index) => (
                            <button
                                key={index}
                                className='w-7 h-7 rounded-full border border-gray-800 focus:border-2 focus:border-blue-950'
                                style={{ backgroundColor: color }}
                            > </button>
                        ))
                    }
                   </div>

                    <div className='flex gap-3 my-2'>
                        {
                            product.sizes?.map((size, index) => (
                                <button 
                                    key={index}
                                    className="border border-green-950 rounded-[5px] px-2 hover:bg-green-950 hover:text-white transition duration-300 focus:bg-green-950 focus:text-white "
                                >
                                    {size}
                                </button>
                            ))
                        }
                    </div>

                    <form 
                        action={cartAction.bind(null, product.productId)}
                    >
                       <button 
                            type='submit' 
                            className='w-full bg-green-950 text-white font-semibold px-4 py-2 rounded-[5px] hover:bg-green-800 transition duration-300'
                        >
                            Add to Cart
                        </button> 
                    </form>

                    <button 
                            type='submit'
                            className='bg-gray-300 border border-gray-700 text-black font-semibold px-4 py-2 rounded-[5px] hover:bg-gray-300/50 transition duration-300'    
                        >
                            Buy Now
                    </button>
                </div>
            </div>

            <div className='flex flex-wrap justify-around gap-12 font-mono border-b border-gray-300 py-4'>
                    <h1 className='flex items-center gap-2 text-gray-800 text-lg sm:text-xl md:text-2xl font-semibold'>
                        <SearchStatus2 size={24} />
                        Free Shopping
                    </h1>

                    <h1 className='flex items-center gap-2 text-gray-800 text-lg sm:text-xl md:text-2xl font-semibold'>
                        <CircleArrowLeft size={24} />
                        7 Days Return
                    </h1>

                    <h1 className='flex items-center gap-2 text-gray-800 text-lg sm:text-xl md:text-2xl font-semibold'>
                        <ShieldNetwork size={24} />
                        Secure Payment
                    </h1>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='text-xl sm:text-xl md:text-2xl xl:text-3xl text-shadow-gray-900 font-semibold font-mono'>
                    Product Description
                </h1>

                <p className='text-sm sm:text-lg md:text-xl text-gray-700 font-extralight'>
                    {product.description}
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-12  '>
                {
                randomProducts.map((product) => {
                    return (
                    <Link key={product.id} href={`${product.productId}`}>
                        <div className='w-[250px] min-[490px]:w-[280px] p-3 rounded-2xl overflow-hidden bg-amber-50 shadow-xl hover:scale-105 transition duration-300 '>
                        <img 
                            src={product.images[0]} 
                            alt={product.subCategory} 
                            className='w-[250px] h-[250px] min-[490px]:w-[280px] object-top object-cover rounded-t-2xl mb-6'
                        />
                        <h1 className='ml-4 text-xl font-semibold mb-2'>
                            {product.name}
                        </h1>
                        <p className='ml-4 mb-4 text-2xl font-serif'>
                            ₹{product.price}
                        </p>
                        </div>                
                    </Link>
                    
                    )
                })
                }
            </div>            
        </div>
    )
}

export default ProductDetailsPage