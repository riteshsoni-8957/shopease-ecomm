import { getUserById } from "@/api/users";
import { getSession } from "../../_lib/session";
import NavBarOuter from "./NavBarOuter";
import DeleteInvalidSession from "@/components/DeleteInvalidSession";

async function Navbar() {
    const session = await getSession();

    let user = null;

<<<<<<< HEAD
    if (session?.id) {
        user = await getUserById(session.id);
    }

    // Session hai, lekin user nahi mila
    if (session && !user) {
        return <DeleteInvalidSession />;
=======
    if(session && !user) {
        await deleteSession()
>>>>>>> 6dc72bc741c9ef04b8e6155adc09051681f63529
    }

    return (
        <div className="z-[9999] sticky top-0 flex flex-col px-6 sm:px-12 lg:px-18 py-2 bg-white shadow-md">
            <NavBarOuter
                session={session}
                user={user}
            />
        </div>
    );
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar
>>>>>>> 6dc72bc741c9ef04b8e6155adc09051681f63529
