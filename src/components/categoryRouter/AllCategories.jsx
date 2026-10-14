
import Link from 'next/link'

function AllCategories({categories, user}) {
  return (
    <div className='flex flex-wrap justify-center gap-12 p-8'>
        {
            categories.map((category) => {
                return (
                    <Link key={category.id} href={`products?category=${encodeURIComponent(category.name)}`}>
                        <div className='w-[250px] min-[490px]:w-[280px] p-3 rounded-2xl overflow-hidden bg-amber-50 shadow-xl hover:scale-105 transition duration-300 '>
                            <img 
                                src={category.image} 
                                alt={category.slug} 
                                className='w-[250px] h-[250px] min-[490px]:w-[280px] object-top object-cover rounded-t-2xl mb-6'
                            />
                            <h1 className='ml-4 text-xl font-semibold mb-2'>
                                {category.name}
                            </h1>
                            <p className='ml-4 mb-4 text-lg font-serif'>
                                {category.description}
                            </p>
                        </div>                
                    </Link>
                )
            })
        }
    </div>
  )
}

export default AllCategories