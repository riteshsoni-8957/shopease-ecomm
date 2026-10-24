import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import ContactPage from '../../components/contactRouter/ContactPage'

export const metadata = {

};

function page() {
  metadata.title = "Contact Us - Shop Ease";
  metadata.description = "Get in touch with Shop Ease for questions about products, orders, or shopping assistance. Contact our team for support and information about your online shopping experience.";

  return (
    <div className='w-full h-screen'>
      <Navbar />

      <main>
       <ContactPage />       
      </main>
      
      <Footer />
    </div>
  )
}

export default page