// "It is server side dynamic pId routing"
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer"
import ProductDetailsPage from "../../../components/shopRouter/ProductDetailsPage";
import { getProductById, getProducts } from "../../../api/products";
import { getSession } from "../../../_lib/session";
import { getUserById } from "../../../api/users";
import Link from "next/link";
import DeleteInvalidSession from "../../../components/DeleteInvalidSession";

export const metadata = {

};

async function page({params}) {
    metadata.title = "Product Details - Shop Ease";
    metadata.description = "Explore detailed product information at Shop Ease, including stylish fashion, men's and women's clothing, product features, and prices. Find the perfect products for your style.";

    const {pId} = await params;
    console.log("params id: ", pId);

    const session = await getSession();
    const user = session ? await getUserById(session.id) : "";

    const products = await getProducts();  //All Products
    const product = await getProductById(pId);   //Single product by pId

    console.log("All Products: ", products);
    console.log("product by pId: ", product);

    if(session && !user) {
        return <DeleteInvalidSession />;
    }

    return (
        <div>
            {
                session ? (
                <>
                    <Navbar />
                    <main>
                       <ProductDetailsPage user={user} product={product} products={products} />                     
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
