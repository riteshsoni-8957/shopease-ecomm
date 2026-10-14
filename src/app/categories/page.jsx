// it is server side categories routing
import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer"
import Link from 'next/link';
import { getSession } from '../../_lib/session';
import { getCategories } from '../../api/categories';
import { getUserById } from '../../api/users';
import CategoryPage from '../../components/categoryRouter/CategoryPage';

async function page() {
    const session = await getSession();
    const user = session ? await getUserById(session.id) : "";
    const categories = await getCategories();
    console.log("categories: ", categories);

    return (
        <div className='w-full h-screen '>
        {
            session ? (
            <>
                <Navbar />
                <CategoryPage categories={categories} user={user} />
                <Footer />
            </>
            ) : (
            <>
                <div className='w-full h-screen flex items-center justify-center'>
                    <div className='flex text-sm min-[500px]:text-xl sm:text-2xl lg:text-3xl space-x-2'>
                        <h1>Please</h1>
                        <Link href="/login" className='text-red-500 hover:underline'>
                            Login
                        </Link>
                        <h1>to Access your Categories</h1>
                    </div>
                </div>
            </>
            )
        }
        </div>        
    )
}

export default page