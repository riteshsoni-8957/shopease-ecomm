// it is server side routing
import Register from "../../../components/auth/Register"

export const metadata = {

};

function page() {
  metadata.title = "Shop Ease - Register"
  metadata.description = "Register "

  return (
    <div className='w-full min-[590px]:h-screen flex items-center justify-center bg-gray-200/10'>
        <Register />
    </div>
  )
}

export default page