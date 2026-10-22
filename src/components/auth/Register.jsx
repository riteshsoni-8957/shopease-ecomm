"use client"
import Link from 'next/link'
import React, { useActionState, useState } from 'react'
import { GoEyeClosed } from 'react-icons/go'
import { RxEyeOpen } from 'react-icons/rx'
import { registerAction } from '../../serverAction/auth'

function Register() {
    const [showPass, setShowPass] = useState(false);
    const [state, formAction, isPending] = useActionState(registerAction, {error: null});

    return (
            <div className='flex flex-col min-[590px]:flex-row w-full md:w-[700px] min-h-[400px] shadow-2xl rounded-2xl overflow-hidden mx-6 my-9'>
                {/* details container */}
                <div className='min-[590px]:w-[45%] register-bg bg-no-repeat bg-cover bg-center flex flex-col  px-4 py-4 pb-10 min-[590px]:pb-15'>
                    <img src="/logo-image.png" alt="ShopEase" className='w-20 h-20 mb-1'/>
                    <h1 className='text-black text-xl font-bold'>
                        Join ShopEase
                    </h1>
                    <p className='text-black text-[16px] font-mono mb-4'>
                        Create your account and continue shopong.
                    </p>

                    <h3 className='text-black text-[16px] font-mono font-semibold'>Exculsive Offers</h3>
                    <h3 className='text-black text-[16px] font-mono font-semibold'>Faster Checkout</h3>
                    <h3 className='text-black text-[16px] font-mono font-semibold'>Track your Orders</h3>
                </div>
                
                {/* register container */}
                <div className='min-[590px]:w-[55%] flex flex-col px-5 py-7 min-[590px]:py-12 bg-white space-y-3'>
                    {/* create account heading */}
                    <h1 className='text-2xl text-gray-900 font-bold'>
                        Create Account
                    </h1>

                    {/* form */}
                    <form action={formAction} className='flex flex-col space-y-4'>
                        {/* label input div 1 */}
                        <div className='flex flex-col space-y-1'>
                            <label 
                                htmlFor="name" 
                                className='text-gray-800 text-lg font-mono'
                            >
                                Full Name
                            </label>
                            <input 
                                type="text" 
                                name='name'
                                id='name'
                                maxLength={25}
                                required
                                className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5' 
                            />
                        </div>

                        {/* label input div 2 */}
                        <div className='flex flex-col space-y-1'>
                            <label 
                                htmlFor="email" 
                                className='text-gray-800 text-lg font-mono'
                            >
                                Email Address
                            </label>
                            <input 
                                type="email"
                                id='email'
                                name='email'
                                required
                                className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5 :' 
                            />
                        </div>

                        {/* label input div 3 */}
                        <div className='relative flex flex-col space-y-1'>
                            <label 
                                htmlFor="password" 
                                className='text-gray-800 text-lg font-mono'
                            >
                                Password
                            </label>
                            <input 
                                type={showPass ? "text" : "password"}
                                id='password'
                                name='password'
                                maxLength={20}
                                required
                                className='border border-gray-500 rounded-[7px] h-[33px] text-lg px-4 pb-0.5 :' 
                            />

                            {/* show password icon */}
                            <span 
                                onClick={() => setShowPass(!showPass)}
                                className='absolute top-10 right-5' 
                            >
                                {
                                    showPass ? <RxEyeOpen /> : <GoEyeClosed />
                                }
                            </span>
                        </div>

                        {/* Submit button */}
                        <button 
                            type='submit'
                            disabled={isPending}
                            className='bg-blue-500/50 hover:bg-blue-400 w-full h-[35px] rounded-[10px] text-xl font-semibold pb-1'    
                        >
                            {isPending ? "Registered in..." : "Register"}
                        </button>

                        {
                            state.error && (
                                <h1 className='text-[12px] sm:text-sm text-red-500 text-center font-semibold'>
                                    {state.error}
                                </h1>
                            )
                        }
                    </form>

                    {/* login div */}
                    <div className='flex flex-row items-center justify-center space-x-3 text-[12px] min-[380px]:text-lg min-[590px]:text-sm sm:text-[17px]'>
                        <h1 className='font-semibold'>
                            Already have an Account ?
                        </h1>
                        <Link href="/login" className='hover:text-blue-700 hover:font-bold'>
                            Login
                        </Link>
                    </div>
                </div>            
            </div>
    )
}

export default Register