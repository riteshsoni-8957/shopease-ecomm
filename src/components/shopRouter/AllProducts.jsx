import React from 'react'
import Link from 'next/link'

function AllProducts({ user, filteredProducts }) {
    console.log("filtered Products: ", filteredProducts);

    return (
        <div className='flex flex-wrap justify-center gap-12 '>
            {
                filteredProducts.map((product) => {
                    return (
                    <Link key={product.id} href={`products/${product.productId}`}>
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
    )
}

export default AllProducts