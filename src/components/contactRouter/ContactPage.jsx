import React from 'react'
import ContactBox from './ContactBox'

function ContactPage() {
  return (
    <div className='flex flex-col items-center mx-auto w-fit my-8 md:my-12'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center font-bold font-black font-serif mb-1'>
            Get In Touch
        </h1>
        <p className='max-w-[360px] sm:max-w-[450px] md:max-w-[500px] text-center text-[12px] sm:text-sm md:text-[16px] px-6 font-mono text-gray-600 mb-7'>
            Have question? We&apos;re here for you. Drop us a line, Write us an email, or send us a text.
        </p>

        <div className='w-full flex flex-col gap-6 px-6'>
            <ContactBox />
        </div>
    </div>
  )
}

export default ContactPage