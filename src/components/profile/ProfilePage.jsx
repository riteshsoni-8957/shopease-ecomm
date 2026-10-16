"use client";
import Link from 'next/link';
import { useState } from 'react'
import { IoIosInformationCircle } from 'react-icons/io';
import { LiaFirstOrder } from 'react-icons/lia';
import { RiLogoutCircleRFill, RiMenu2Fill, RiMenu3Fill } from 'react-icons/ri';
import { Si1Password } from 'react-icons/si';
import { TbAddressBook } from 'react-icons/tb';
import { logoutAction } from '../../serverAction/auth';
import { AiFillDashboard } from 'react-icons/ai';
import ProfileForm from './ProfileForm';

function ProfilePage({session, user}) {
    const [isAdmin, setIsAdmin] = useState(user?.role === "Admin");
    const [sidebar, setSidebar] = useState(false);
    const [isAvatar, setIsAvatar] = useState(user?.avatar)

    return (
        <div className='flex flex-col w-full'>
            <div className='sticky top-18 bg-white shadow-sm flex justify-between text-2xl sm:text-3xl font-serif font-bold text-gray-900 py-5 px-6 sm:px-12 lg:px-18'>
                <h1 className=''>
                    My Profile
                </h1>

                {/* profile sidebar menu icon*/}
                <div className='text-4xl text-gray-900 hover:text-gray-700/90 cursor-pointer md:hidden' onClick={() => setSidebar(!sidebar)}>
                    {sidebar ? <RiMenu3Fill /> : <RiMenu2Fill />}
                </div>
            </div>

            <div className='flex flex-row justify-center '>
                {/* sidebar */}
                <div className={`${sidebar ? "translate-x-0" : "translate-x-[-1000px]"} md:translate-x-0 transition-all duration-300 ease-in-out flex px-4 lg:px-10 pt-7 lg:pt-13 fixed top-[149px] left-0 bottom-0 bg-gray-50 shadow-2xl w-[270px] lg:w-[350px] whitespace-nowrap overflow-hidden`}>
                    <ul className='flex flex-col space-y-6'>
                        <li className='flex items-center space-x-3 text-blue-700'>
                            <div className=''>
                                <IoIosInformationCircle className='w-8 h-8'/>                            
                            </div>
                            <h1 className='text-2xl font-serif '>
                                Profile Info                            
                            </h1>
                        </li>

                        <li className=''>
                            <Link href="/order" className='flex items-center space-x-3 hover:text-blue-700'>
                                <div className=''>
                                    <LiaFirstOrder className='w-8 h-8'/>                            
                                </div>
                            
                                <h1 className='text-2xl font-serif '>
                                    My Orders                           
                                </h1>                            
                            </Link>
                        </li>

                        {
                            isAdmin ? (
                                <li className=''>
                                    <Link href="/dashboard" className='flex items-center space-x-3 hover:text-blue-700'>
                                        <div className=''>
                                            <AiFillDashboard className='w-8 h-8'/>                            
                                        </div>
                                    
                                        <h1 className='text-2xl font-serif '>
                                            My Dahboard                           
                                        </h1>                            
                                    </Link>
                                </li>   
                            ) : (
                                ""
                            )
                        }

                        <li className=''>
                            <Link href="" className='flex items-center space-x-3 hover:text-blue-700'>
                                <div className=''>
                                    <TbAddressBook className='w-8 h-8'/>                            
                                </div>
                            
                                <h1 className='text-2xl font-serif '>
                                    My Addresses                           
                                </h1>                            
                            </Link>
                        </li>

                        <li className=''>
                            <Link href="" className='flex items-center space-x-3 hover:text-blue-700'>
                                <div className=''>
                                    <Si1Password className='w-8 h-8'/>                            
                                </div>

                                <h1 className='text-2xl font-serif '>
                                    Change Password                          
                                </h1>                            
                            </Link>
                        </li>

                        <li className=''>
                            <form action={logoutAction} className=''>
                                <button className='text-2xl font-serif flex items-center space-x-3 hover:text-blue-700'>
                                    <div className=''>
                                        <RiLogoutCircleRFill className='w-8 h-8'/>                            
                                    </div>
                                    <div>
                                        Logout                           
                                    </div>
                                </button>                            
                            </form>
                        </li>
                    </ul>
                </div>

                <div className='w-full h-fit md:ml-[270px] lg:ml-[350px] my-7'>
                    <h1 className='text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-5 px-6 sm:px-12 lg:px-24 xl:px-36 2xl:px-48'>
                        Profile Information
                    </h1>

                    <div className='flex items-center mb-5 px-6 sm:px-12 lg:px-24 xl:px-36 2xl:px-48 space-x-4'>
                        <img
                            src={isAvatar ? user.avatar : "https://img.magnific.com/free-vector/user-circles-set_78370-4704.jpg"}
                            alt={user.name}
                            className="w-17 h-17 rounded-[50%] border-3 border-gray-500"
                        />

                        <div className=''>
                            <h1 className='text-xl font-semibold font-serif'>
                                {user.name}
                            </h1>

                            <p className='text-lg font-extralight'>
                                {user.email}
                            </p>
                        </div>
                    </div>

                    <ProfileForm user={user} />                    
                </div>
            </div>
        </div>
    )
}

export default ProfilePage