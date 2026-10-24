// it is server side routing
import Link from "next/link";
import Register from "../../../components/auth/Register"

export const metadata = {

};

function page() {
  metadata.title = "Register - Shop Ease";
  metadata.description = "Create your Shop Ease account to explore the latest fashion and lifestyle products, manage your shopping cart, and enjoy a convenient online shopping experience.";

  return (
    <div className='w-full min-[590px]:h-screen flex flex-col items-center justify-center bg-gray-200/10 px-6 py-6 min-[590px]:py-0'>
      <Link
        href="/"
        className="self-start inline-block rounded-lg bg-blue-600/60 hover:bg-blue-500 px-4 py-2 text-white text-xl font-mono hover:font-black"
      >
        Home
      </Link>
      
        <Register />
    </div>
  )
}

export default page