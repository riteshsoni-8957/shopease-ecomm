import React from 'react'
import { ForwardRight } from 'reicon-react'

function ContactForm() {
  return (
    <form 
        action=""
        className='flex flex-col gap-y-8'
    >
        <div className='grid md:grid-cols-2 gap-x-6 gap-y-8'>
            <div className='flex flex-col'>
                <label 
                    htmlFor="name"
                    className='text-lg font-semibold font-serif '
                >
                    Name
                </label>
                <input 
                    type="text"
                    id='name'
                    required
                    className='border-b-2 border-bs-gray-900 outline-none px-2 pb-1 ' 
                />
            </div>
            <div className='flex flex-col'>
                <label 
                    htmlFor="email"
                    className='text-lg font-semibold font-serif '
                >
                    Email
                </label>
                <input 
                    type="email"
                    id='email'
                    required
                    className='border-b-2 border-bs-gray-900 outline-none px-2 pb-1 ' 
                />
            </div>
            <div className='flex flex-col'>
                <label 
                    htmlFor="phone"
                    className='text-lg font-semibold font-serif '
                >
                    Phone Number
                </label>
                <input 
                    type="tel"
                    id='phone'
                    minLength={10}
                    maxLength={10}
                    required
                    className='border-b-2 border-bs-gray-900 outline-none px-2 pb-1 ' 
                />
            </div>
            <div className='flex flex-col'>
                <label 
                    htmlFor="question"
                    className='text-lg font-semibold font-serif '
                >
                    Product Question
                </label>
                <input 
                    type="text"
                    id='question'
                    required
                    className='border-b-2 border-bs-gray-900 outline-none px-2 pb-1 ' 
                />
            </div>
        </div>

        <div className='flex flex-col'>
            <label 
                htmlFor="message"
                className='text-lg font-semibold font-serif '
            >
                Message
            </label>
            <input 
                type="text"
                id='message'
                minLength={20}
                maxLength={100}
                required
                className='border-b-2 border-bs-gray-900 outline-none px-2 pb-1 ' 
            />
        </div>

        <button type='submit' className='flex items-center text-lg w-fit px-6 py-2 bg-black hover:bg-gray-950/80 text-white rounded-lg gap-3'>
            Send Message
            <ForwardRight size={24} weight="Filled" />
        </button>
    </form>
  )
}

export default ContactForm