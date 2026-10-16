// This file is server side component.....
import { getUserById } from '@/api/users';
import {deleteSession, getSession} from '../../_lib/session'
import NavBarOuter from './NavBarOuter'

async function Navbar() {
    const session = await getSession(); // Replace with actual session logic
    console.log("session: ", session);

    const user = session ? await getUserById(session.id) : "";   //this user by session id
    console.log("user: ", user)

    if(!user) {
        await deleteSession();
    }

    return (
        <div className='z-9999 sticky top-0 flex flex-col px-6 sm:px-12 lg:px-18 py-2 bg-white shadow-md'>
            <NavBarOuter session={session} user={user}/>
        </div>
    )
}

export default Navbar
