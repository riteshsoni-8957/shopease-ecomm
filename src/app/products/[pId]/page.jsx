// "It is server side dynamic pId routing"
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer"
import ProductDetailsPage from "../../../components/shopRouter/ProductDetailsPage";
import { getProductById, getProducts } from "../../../api/products";
import { getSession } from "../../../_lib/session";
import { getUserById } from "../../../api/users";
import Link from "next/link";

export const metadata = {

};

async function page({params}) {
    metadata.title = "Shop Ease - Product details"
    metadata.description = "Product details "

    const {pId} = await params;
    console.log("params id: ", pId);

    const session = await getSession();
    const user = session ? await getUserById(session.id) : "";

    const products = await getProducts();  //All Products
    const product = await getProductById(pId);   //Single product by pId

    console.log("All Products: ", products);
    console.log("product by pId: ", product);

    return (
        <div>
            {
                session ? (
                <>
                    <Navbar />
                    <ProductDetailsPage user={user} product={product} products={products} />
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
                            <h1>to Access your Product Details</h1>
                        </div>
                    </div>
                </>
                )
            }
        </div>
    )
}

export default page
