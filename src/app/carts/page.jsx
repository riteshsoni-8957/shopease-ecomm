// It is server side cart router
import { getCartsByCartId } from '../../api/carts'
import { getSession } from '../../_lib/session'
import Link from 'next/link';
import Navbar from '../../components/navbar/Navbar';
import CartPage from "../../components/cartRouter/CartPage";

async function page() {
    const session = await getSession();
    const carts = await getCartsByCartId(session?.id);
    console.log("carts by session id: ", carts);

    return (
        <div className='w-full h-screen'>
            {
                session ? (
                    <>
                        <Navbar />
                        <CartPage carts={carts} />
                    </>
                ) : (
                    <div className='w-full h-screen flex items-center justify-center'>
                        <div className='flex text-sm min-[500px]:text-xl sm:text-2xl lg:text-3xl space-x-2'>
                            <h1>Please</h1>
                            <Link href="/login" className='text-red-500 hover:underline'>
                                Login
                            </Link>
                            <h1>to Access your Carts</h1>
                        </div>
                    </div>
                )
            }            
        </div>
    )
}

export default page