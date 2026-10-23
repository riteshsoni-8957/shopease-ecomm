// It is server side dynamic pId checkout routing
import React from 'react'
import { getProductById } from '../../../api/products';
import CheckoutPage from '../../../components/checkoutRouter/CheckoutPage';
import { getSession } from '../../../_lib/session';
import { getUserById } from '../../../api/users';

async function page({params}) {
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