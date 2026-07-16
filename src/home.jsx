import Navbar from './componentss/navbar';
import Hero from './componentss/hero';
import About from './componentss/about';
import Stats from './componentss/stat';
import Services from './componentss/services';
import Gallery from './componentss/gallery';
import Video from './componentss/video';
import Features from "./componentss/features";
import WhyChooseUs from './componentss/whychooseus';
import Testimonials from './componentss/testimonials';
import Contact from './componentss/contact';
import Footer from './componentss/footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Gallery />
      <Video />
      <Features/>
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/918113917460"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </>
  );
}

export default Home;