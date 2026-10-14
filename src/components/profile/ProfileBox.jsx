// It is Navbar user icon profile box
"use client";
import { useState } from 'react'
import { logoutAction } from '../../serverAction/auth';
import Link from 'next/link';

function ProfileSidebar({user}) {
    const [isAdmin, setIsAdmin] = useState(user?.role === "Admin");
    const [isAvatar, setIsAvatar] = useState(user?.avatar)

    return (
        <div className='p-5 flex flex-col space-y-'>
            <div className='w-full flex items-center justify-center space-x-6 bg-blue-400 py-4 rounded-t-2xl'>
                <img
                    src={isAvatar ? user.avatar : "https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg"}
                    alt={user.name}
                    className="w-15 h-15 rounded-[50%] border-3 border-gray-50"
                />

                {
                    isAdmin ? (
                        <p className='text-xl font-mono'>
                            {(user.role)}
                        </p>
                    ) : (
                        ""
                    )
                }
            </div>

            <h1 className='text-xl font-semibold font-serif mt-4'>
                {user.name}
            </h1>

            <p className='text-lg font-extralight'>
                {user.email}
            </p>

            <Link href="/profile">
                <button className='w-full pb-1 mt-4 bg-blue-400/60 rounded-[5px] hover:bg-blue-400 transition duration-300 text-gray-600 hover:text-gray-900 text-xl hover:text-gray-700/90'>
                    Profile    
                </button>              
            </Link>            

            <form action={logoutAction} className=''>
                <button className='w-full pb-1 mt-2 bg-red-400/70 rounded-[5px] hover:bg-red-400 transition duration-300 text-gray-600 hover:text-gray-900 text-xl hover:text-gray-700/90'>
                    Logout                        
                </button>                                
            </form> 
        </div>
    )
}

export default ProfileSidebar