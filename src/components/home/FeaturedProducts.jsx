"use server";
import Link from 'next/link';
import { getProducts } from '../../api/products'

async function FeaturedProducts() {
  const products = await getProducts();
  console.log("products: ", products);

  return (
    <div className='flex flex-col px-6 sm:px-12 md:px-18 pt-8 pb-16 lg:py-16 w-full'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl mb-8 lg:mb-12 font-bold font-serif text-gray-900'>
        Featured Products
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-12 px-6 min-[400px]:px-12 min-[500px]:px-18 sm:px-6 md:px-12 lg:px-12 xl:px-6'>
        {
          products.slice(0, 4).map((product) => {
            return (
              <Link key={product.id} href={`products/${product.productId}`}>
                <div className='w-full p-3 rounded-2xl overflow-hidden bg-amber-50 shadow-xl hover:scale-105 transition duration-300 '>
                  <img 
                    src={product.images[0]} 
                    alt={product.subcategory} 
                    className='w-full h-[240px] min-[400px]:h-[280px] min-[580px]:h-[350px] sm:h-[240px] object-top object-cover rounded-t-2xl mb-6'
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

export default FeaturedProducts