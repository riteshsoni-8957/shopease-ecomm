// it is server side categories routing
import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer"
import Link from 'next/link';
import { deleteSession, getSession } from '../../_lib/session';
import { getCategories } from '../../api/categories';
import { getUserById } from '../../api/users';
import CategoryPage from '../../components/categoryRouter/CategoryPage';
import DeleteInvalidSession from "../../components/DeleteInvalidSession";

export const metadata = {

};

async function page() {
    metadata.title = "Categories - Shop Ease";
    metadata.description = "Explore fashion and lifestyle categories at Shop Ease. Discover men's and women's clothing, browse different styles, and find the right products for your needs.";

    const session = await getSession();
    const user = session ? await getUserById(session.id) : "";
    const categories = await getCategories();
    console.log("categories: ", categories);

    if(session && !user) {
        return <DeleteInvalidSession />;
    }

    return (
        <div className='w-full h-screen '>
        {
            session ? (
            <>
                <Navbar />
                <main>
                    <CategoryPage categories={categories} user={user} />
                </main>
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
