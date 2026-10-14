import Navbar from '../components/navbar/Navbar';
import Hero from '../components/home/Hero';
import Category from '../components/home/Category';
import FeaturedProducts from '../components/home/FeaturedProducts';
import NewArrivals from '../components/home/NewArrivals';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import NewsLetter from '../components/home/NewsLetter';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Navbar />

      <Hero />
      <Category />
      <FeaturedProducts />
      <NewArrivals />
      <WhyChooseUs />
      <Testimonials />
      <NewsLetter />

      <Footer />
    </div>
  );
}
