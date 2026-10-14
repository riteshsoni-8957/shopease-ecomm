"use client";
import { XSquare } from 'reicon-react';
import { Menu } from 'reicon-react';
import { useEffect, useState } from 'react'
import AllProducts from './AllProducts';
import { useSearchParams } from 'next/navigation';

function ProductPage({ user, products }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // access category name to search params (category=category.name)
    const searchParams = useSearchParams(); 
    const categoryFromUrl = searchParams.get("category");
    console.log("category name from url: ", categoryFromUrl);

    // store product category in categories  
    const categories = [...new Set(products.map((item) => item.category))];  // (  [...new set()] se category me duplicate value hat gaya  )
    console.log("categories: ", categories);

 
    const [checkedCategory, setCheckedCategory] = useState([]);
    console.log("checked category: ", checkedCategory);

    useEffect(() => {
    if (categoryFromUrl) {
        setCheckedCategory([categoryFromUrl.toLowerCase()]);
    } else {
        setCheckedCategory([]);
    }
    }, [categoryFromUrl]);

    // filterd products by checked category
    const filteredProducts = products.filter((item) => {
        return checkedCategory.length === 0 ? true : checkedCategory.includes(item.category.toLowerCase());
    })  

    return (
        <div>
            {/* Product Header bg*/}
            <div className='relative flex flex-col shop-image-bg bg-cover bg-center text-white px-5 min-[400px]:px-10 min-[500px]:px-15 sm:px-20 md:px-30 py-10 gap-3'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold font-serif'>
                    {checkedCategory.length === 1 ? `Shop ${checkedCategory} Products` : checkedCategory.length === 0 || checkedCategory.length === categories.length ? "Shop All Products" : "Shop Products"}
                </h1>

                <p className='text-lg font-light font-serif text-gray-100'>
                    Home &gt; Products
                </p>

                {/* sidebar menu icon */}
                <div className='absolute bottom-4 right-4 cursor-pointer md:hidden' onClick={() => setSidebarOpen(!sidebarOpen)}>
                    {sidebarOpen ? <XSquare size={36} weight="Filled" className='hover:text-blue-400' /> : <Menu size={36} weight='Filled' className='hover:text-blue-400' />}
                </div>
            </div>

            <div className='flex '>
                {/* Sidebar */}
                <div className={`z-[1000] w-[250px] md:w-[280px] bg-gray-50 shadow-2xl fixed top-56 sm:top-57 md:top-58 bottom-0 flex flex-col gap-4 p-8 overflow-scroll scrollbar-none md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "translate-x-[-1000px]"} transition-all duration-300 ease-in-out`}>
                    <h1 className='text-xl sm:text-2xl md:text-3xl font-bold font-serif'>
                        Filter
                    </h1>

                    {/* category */}
                    <div className='flex flex-col'>
                        <h1 className='font-semibold mb-1'>
                        Category
                        </h1>

                        {
                            categories.map((category) => (
                                <label key={category} className="w-fit flex items-center hover:translate-x-3 duration-300 ease-in-out">
                                    <input
                                        type="checkbox"
                                        className="mr-1"
                                        checked={checkedCategory.includes(category.toLowerCase())}
                                        onChange={(e) => {
                                            const value = category.toLowerCase();

                                            setCheckedCategory(
                                                e.target.checked
                                                    ? [...checkedCategory, value]
                                                    : checkedCategory.filter((item) => item !== value)
                                            );
                                        }}
                                    />
                                    {category}
                                </label>
                            ))
                        }
                    </div>

                    {/* price */}
                    <div className='flex flex-col'>
                        <h1 className='font-semibold mb-1'>
                        Price
                        </h1>
                        <label htmlFor="under-500" className='flex items-center '>
                        <input 
                            type="checkbox" 
                            id="under-500"
                            className='mr-1'
                        />
                        Under $500
                        </label>
                        <label htmlFor="500-1000" className='flex items-center '>
                        <input 
                            type="checkbox" 
                            id="500-1000"
                            className='mr-1'
                        />
                        $500 - $1000
                        </label>
                        <label htmlFor="over-1000" className='flex items-center '>
                        <input 
                            type="checkbox" 
                            id="over-1000"
                            className='mr-1'
                        />
                        Over $1000
                        </label>
                    </div>

                    {/* brand */}
                    <div className='flex flex-col'>
                        <h1 className='font-semibold mb-1'>
                        Brand
                        </h1>
                        <label htmlFor="Nike" className='flex items-center '>
                        <input 
                            type="checkbox" 
                            id="Nike"
                            className='mr-1'
                        />
                        Nike
                        </label>
                        <label htmlFor="Adidas" className='flex items-center '>
                        <input 
                            type="checkbox" 
                            id="Adidas"
                            className='mr-1'
                        />
                        Adidas
                        </label>
                        <label htmlFor="Reebok" className='flex items-center '>
                        <input 
                            type="checkbox" 
                            id="Reebok"
                            className='mr-1'
                        />
                        Reebok
                        </label>
                        <label htmlFor="puma" className='flex items-center '>
                        <input 
                            type="checkbox" 
                            id="puma"
                            className='mr-1'
                        />
                        Puma
                        </label>
                        <label htmlFor="levi's" className='flex items-center '>
                        <input 
                            type="checkbox" 
                            id="levi's"
                            className='mr-1'
                        />
                        Levi&apos;s
                        </label>
                    </div>
                </div>

                {/* products listed */}
                <div className='fixed top-56 sm:top-57 md:top-58 bottom-0 flex ml-0 md:ml-[280px] gap-4 p-8 overflow-scroll scrollbar-none'> 
                    <AllProducts user={user} filteredProducts={filteredProducts} />
                </div>
            </div>
        </div>
    )
}

export default ProductPage
