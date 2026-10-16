// it is server side routing
import Link from 'next/link';
import { deleteSession, getSession } from '../../_lib/session';
import { getUserById } from '../../api/users';
import ProfilePage from '../../components/profile/ProfilePage';
import Navbar from '../../components/navbar/Navbar';
// import DeleteInvalidSession from "../../components/DeleteInvalidSession";

export const metadata = {

};

async function page() {
    metadata.title = "Shop Ease - Profile"
    metadata.description = "Profile "

    const session = await getSession();
    const user = session ? await getUserById(session.id) : "";

    // if(session && !user) {
    //     return <DeleteInvalidSession />;
    // }

    return (
        <div className='w-full h-screen '>
            {
                session ? (
                    <>
                        <Navbar />
                        <ProfilePage session={session} user={user}/>                      
                    </>
                ) : (
                    <div className='w-full h-screen flex items-center justify-center'>
                        <div className='flex text-sm min-[500px]:text-xl sm:text-2xl lg:text-3xl space-x-2'>
                            <h1>Please</h1>
                            <Link href="/login" className='text-red-500 hover:underline'>
                                Login
                            </Link>
                            <h1>to Access your Profile</h1>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default page
