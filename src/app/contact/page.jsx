import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ContactPage from '../../components/contactRouter/ContactPage'

function page() {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  )
}

export default page