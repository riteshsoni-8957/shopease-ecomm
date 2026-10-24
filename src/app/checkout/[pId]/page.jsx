// It is server side dynamic pId checkout routing
import React from 'react'
import { getProductById } from '../../../api/products';
import CheckoutPage from '../../../components/checkoutRouter/CheckoutPage';
import { getSession } from '../../../_lib/session';
import { getUserById } from '../../../api/users';

export const metadata = {

};

async function page({params}) {
  metadata.title = "Checkout - Shop Ease";
  metadata.description = "Complete your purchase at Shop Ease with a smooth and secure checkout experience. Review your order details and proceed to place your order.";

  const {pId} = await params;
  const product = await getProductById(pId);

  console.log("checkout product id: ", pId);
  // console.log("Checkout product: ", product);

  const session = await getSession();
  const user = session ? await getUserById(session.id) : "";

  // console.log("checkout user: ", user);

  return (
    <div className=''>
        <CheckoutPage product={product} user={user} />
    </div>
  )
}

export default page