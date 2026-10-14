import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <>
      <div className='bg-green-950 p-6 sm:px-12 md:px-18 rounded-t-xl text-white'>
        <div className='flex flex-wrap justify-between gap-12 '>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold font-serif mb-1'>
              ShopEase
            </h1>

            <p className='text-lg font-extralight font-mono'>
              Best Style, Better You!
            </p>

            <div className='flex gap-4'>
                <Link 
                  href="https://github.com" 
                  target="_blank" 
                  className="text-[14px] border border-cyan-300 hover:border-blue-600 rounded-full p-2 hover:bg-blue-300 hover:text-black hover:scale-[1.2]"
                >
                    <FaGithub />
                </Link>

                <Link 
                  href="https://www.linkedin.com/in/ritesh-soni-4939a0270/" 
                  target="_blank" 
                  className="text-[14px] border border-cyan-300 hover:border-blue-600 rounded-full p-2  hover:bg-blue-300 hover:text-black hover:scale-[1.2]"
                >
                    <FaLinkedinIn />
                </Link>

                <Link 
                  href="https://wa.link/j43qko" 
                  target="_blank" 
                  className="text-[14px] border border-cyan-300 hover:border-blue-600 rounded-full p-2  hover:bg-blue-300 hover:text-black hover:scale-[1.2]"
                >
                    <FaWhatsapp />
                </Link>

                <Link 
                  href="mailto:riteshsoni35468@gmail.com" 
                  className="text-[14px] border border-cyan-300 hover:border-blue-600 rounded-full p-2 hover:bg-blue-300 hover:text-black hover:scale-[1.2]"
                >
                    <MdEmail />
                </Link>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <h1 className='text-xl font-bold'>
              Quick Links
            </h1>
            <ul className='flex flex-col gap-1'>
              <li className='w-fit hover:translate-x-1 transition duration-300 hover:text-blue-300'><Link href='/'>
                Home
              </Link></li>

              <li className='w-fit hover:translate-x-1 transition duration-300 hover:text-blue-300'><Link href='/products'>
                Shop
              </Link></li>

              <li className='w-fit hover:translate-x-1 transition duration-300 hover:text-blue-300'><Link href='/categories'>
                Categories
              </Link></li>

              <li className='w-fit hover:translate-x-1 transition duration-300 hover:text-blue-300'><Link href='/about'>
                About Us
              </Link></li>

              <li className='w-fit hover:translate-x-1 transition duration-300 hover:text-blue-300'><Link href='/contact'>
                Contact
              </Link></li>
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h1 className='text-xl font-bold'>
              Customer Care
            </h1>
            <ul className='flex flex-col gap-1'>
              <li className='w-fit hover:translate-x-1 transition duration-300 hover:text-blue-300'><Link href='/'>
                FAQ
              </Link></li>

              <li className='w-fit hover:translate-x-1 transition duration-300 hover:text-blue-300'><Link href='/'>
                Shiping
              </Link></li>

              <li className='w-fit hover:translate-x-1 transition duration-300 hover:text-blue-300'><Link href='/'>
                Returns
              </Link></li>

              <li className='w-fit hover:translate-x-1 transition duration-300 hover:text-blue-300'><Link href='/'>
                Track Order
              </Link></li>
            </ul>
          </div>

          <div className='flex flex-col gap-3'>
            <h1 className='text-xl font-bold'>
              Contact Us
            </h1>
            <div className='flex flex-col gap-1'>
              <p className='text-lg font-extralight font-mono'>
                +91 XXXXXXXXXX
              </p>
              <p className='text-lg font-extralight font-mono'>
                123 Main Street, <br /> City, Country
              </p>
              <p className='text-lg font-extralight font-mono'>
                riteshsoni@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-green-900 py-2 text-[12px] sm:text-[16px] text-white flex justify-center font-serif'>
        &copy; 2026 ShopEase. All Right Reserved
      </div>    
    </>
  )
}

export default Footer