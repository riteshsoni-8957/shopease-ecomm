// it is server side routing
import Login from '../../../components/auth/Login';

export const metadata = {

};

function page() {
  metadata.title = "Shop Ease - Login"
  metadata.description = "Login "

  return (
    <div className='w-full min-[590px]:h-screen flex items-center justify-center bg-gray-200/10'>
        <Login />
    </div>
  )
}

export default page