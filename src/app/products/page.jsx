// "it is server side products routing"
import Link from 'next/link';
import { deleteSession, getSession } from '../../_lib/session';
import { getProducts } from '../../api/products';
import Navbar from '../../components/navbar/Navbar';
import ProductPage from '../../components/shopRouter/productPage';
import { getUserById } from '../../api/users';
import DeleteInvalidSession from "../../components/DeleteInvalidSession";

export const metadata = {

};

async function page() {
  metadata.title = "Shop Ease - Products"
  metadata.description = "Products "

  const session = await getSession();
  const user = session ? await getUserById(session.id) : "";

  const products = await getProducts();   //All products
  console.log("All products: ", products);

    if(session && !user) {
        return <DeleteInvalidSession />;
    }

  return (
    <div className='w-full h-screen '>
      {
        session ? (
          <>
            <Navbar />
            <ProductPage user={user} products={products} />
          </>
        ) : (
          <div className='w-full h-screen flex items-center justify-center'>
              <div className='flex text-sm min-[500px]:text-xl sm:text-2xl lg:text-3xl space-x-2'>
                  <h1>Please</h1>
                  <Link href="/login" className='text-red-500 hover:underline'>
                      Login
                  </Link>
                  <h1>to Access your Products</h1>
              </div>
          </div>
        )
      }
    </div>
  )
}

export default page
