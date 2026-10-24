// It is server side cart router
import { getCartsByCartId } from '../../api/carts'
import { getSession } from '../../_lib/session'
import Link from 'next/link';
import Navbar from '../../components/navbar/Navbar';
import CartPage from "../../components/cartRouter/CartPage";

export const metadata = {

};

async function page() {
    metadata.title = "Cart - Shop Ease";
    metadata.description = "View and manage your shopping cart at Shop Ease. Review selected products, update quantities, and check your items before proceeding to checkout.";

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