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

      <div className='flex flex-wrap justify-center gap-12  '>
        {
          products.slice(0, 4).map((product) => {
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
    </div>
  )
}

export default FeaturedProducts