import { Link } from 'lucide-react'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { CallAdd, EnvelopeOpen, MapPoint } from 'reicon-react'
import ContactForm from './ContactForm'

function ContactBox() {
  return (
    <div className='w-full md:w-170 lg:w-200 flex flex-col md:flex-row bg-gray-50 shadow-xl rounded-lg'>
        <div className='relative flex flex-col justify-between md:w-[45%] min-h-70 md:min-h-90 p-5 m-2 bg-black rounded-[10px] text-gray-50 '>
          <div className='flex flex-col'>
            <h1 className='text-lg sm:text-2xl md:text-lg lg:text-xl font-bold font-serif'>
              Conatct Information
            </h1>

            <p className='text-[12px] sm:text-[16px] md:text-[12px] lg:text-sm font-light font-mono text-gray-200'>
              Say something to start a live chat!
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <a href='' className='flex gap-2 text-sm sm:text-[16px] md:text-sm lg:text-[16px] font-thin items-center'>
              <CallAdd weight='Filled' className='w-[22px]'/>
              +91 9336675791
            </a>
            <a href="mailto:riteshsoni35468@gmail.com" className='flex gap-2 text-sm sm:text-[16px] md:text-sm lg:text-[16px] font-thin items-center'>
              <EnvelopeOpen weight='Filled' className='w-[22px]'/>
              riteshsoni@gmail.com
            </a>
            <a href="" className='flex gap-2 text-sm sm:text-[16px] md:text-sm lg:text-[16px] font-thin max-w-70 items-center'>
              <MapPoint weight='Filled' className='w-[22px]'/>
              Gauriganj, Amethi, Uttar Pradesh. 227409
            </a>
          </div>

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

          <div className='absolute bottom-0 right-0 w-30 h-30 rounded-full bg-gray-500 blur-2xl '>
            <div className=' '></div>  
          </div>          
        </div>

        <div className='md:w-[60%] p-5'>
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactBox