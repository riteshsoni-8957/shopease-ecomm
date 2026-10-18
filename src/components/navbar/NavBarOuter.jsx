// This file is client side components.....
"use client";
import Link from 'next/link'
import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa'
import { FaRegCircleUser } from 'react-icons/fa6'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import ProfileBox from '../profile/ProfileBox'

function NavBarOuter({session, user}) {
    const [sidebar, setSidebar] = useState(false);
    const [profileSidebar, setProfileSidebar] = useState(false);
    const [isAvatar, setIsAvatar] = useState(user?.avatar)

    return (
        <div className='flex items-center justify-between'>
            {/* navbar logo */}
            <div className=''>
                <img 
                    src="/logo-image.png" 
                    alt="logo" 
                    className='h-14 w-14'
                />
            </div>

            {/* menu */}
            <div className='flex items-center justify-center'>
                <ul className={`fixed top-18 left-0  bg-white shadow-lg md:shadow-none h-screen flex flex-col items-center justify-center space-y-12 md:static md:flex-row md:h-auto md:w-auto md:space-y-0 md:space-x-12 lg:space-x-26 md:bg-inherit ${sidebar ? "w-[250px]" : "w-0"} overflow-hidden transition-all duration-300 ease-in-out`}>
                    <li>
                        <Link href="/" className="text-gray-900 text-xl hover:font-bold hover:text-gray-700/90">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className="text-gray-900 text-xl hover:font-bold hover:text-gray-700/90">
                            Shop
                        </Link>
                    </li> 
                    <li>
                        <Link href="/categories" className="text-gray-900 text-xl hover:font-bold hover:text-gray-700/90">
                            Category
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-900 text-xl hover:font-bold hover:text-gray-700/90">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* menu open and close icon */}
                <div className='text-4xl text-gray-900 hover:text-gray-700/90 cursor-pointer md:hidden' onClick={() => setSidebar(!sidebar)}>
                    {sidebar ? <IoMdClose /> :<IoMdMenu />}
                </div>
            </div>

            {/* cart and user logo */}
            <div className='flex items-center'>
                {
                    session ? (
                        <div className='flex items-center space-x-8'>
                            <Link href="/carts" className="text-gray-900 text-2xl hover:scale-120">
                                <FaCartPlus />
                            </Link>

                            <Link href="" onClick={() => setProfileSidebar(!profileSidebar)} className="text-gray-900 text-2xl hover:scale-120">
                                <img
                                    src={isAvatar ? user.avatar : "https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg"}
                                    alt={user.name}
                                    className="w-9 h-9 rounded-[50%] border-3 border-gray-50"
                                />
                            </Link>                               
                        </div>
                    ) : (
                        <div className=''>
                            <Link href="/login" className=''>
                                <button className='px-6 pb-1 bg-blue-400/60 rounded-[5px] hover:bg-blue-400 transition duration-300 text-gray-900 text-2xl font-semibold hover:text-gray-700/90'>
                                    Login                        
                                </button>                                
                            </Link>
                        </div>
                    )
                }
            </div>

            {/* user logo profile sidebar */}
            <div className={`${profileSidebar ? "translate-x-0" : "translate-x-[1000px]"} z-1000 overflow-hidden fixed top-20 right-6 sm:right-12 lg:right-18 bg-gray-50 shadow-lg h-[300px] w-[250px] sm:w-[280px] rounded-2xl duration-500`}>
                <ProfileBox user={user}/>
            </div>             
        </div>
    )
}

export default NavBarOuter