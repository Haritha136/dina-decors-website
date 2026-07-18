import { motion } from "framer-motion";
import gallery24 from "../assetso/gallery24.png";
import gallery48 from "../assetso/gallery48.png";
import gallery18 from "../assetso/gallery18.png";
import gallery6 from "../assetso/gallery6.png";
import gallery37 from "../assetso/gallery37.jpeg";
import gallery36 from "../assetso/gallery36.jpeg";


function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-grid">

        <motion.div
          className="card"
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true,amount:0.3 }}
          transition={{ duration: 0.6 }}
        ><div className="card-image">
          <img src={gallery24} alt="wedding decoration" /></div>
          <div className="servicve-content">
          <h3>Luxury Wedding</h3>
          <p>
            Create unforgettable wedding moments with elegant stage setups,
            floral arrangements, lighting, and customized décor designed to
            match your dream celebration.Experience the wedding of your dreams
            with our luxury wedding planning and décor services. We create 
            breathtaking celebrations with premium floral arrangements, elegant
            stage designs, grand entrances, and customized décor concepts. 
            Every detail is carefully curated to reflect your style,ensuring
            a timeless and unforgettable wedding experience filled with 
            elegance and luxury.
          </p>
          <a href="/luxury-wedding" className="learn-more">
            Learn More
            </a>
            </div>
        </motion.div>
        <motion.div
          className="card"
          initial={{opacity:0,y:100}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true,amount:0.3}}
          transition={{duration:0.8}}
        ><div className="card-image">
          <img src={gallery36} alt="destination wedding" /></div>
          <div className="service-content">
          <h3>Destination Wedding</h3>
          <p>
            Turn your dream destination into the perfect wedding venue with 
            our complete destination wedding planning services. From venue 
            selection and guest coordination to décor, entertainment, and event 
            management, we handle every aspect seamlessly. Whether it's a beachside
            celebration, a hilltop ceremony, or a luxurious resort wedding, we create 
            magical experiences in stunning locations.
          </p>
          <a href="destination-wedding" className="learn-more">
            Learn More
            </a>
            </div>
        </motion.div>
         <motion.div
          className="card"
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true,amount:0.3 }}
          transition={{ duration: 0.8 }}
        >< div className="card-img">
          <img src={gallery18} alt="engagement decoration" /></div>
          <div className="service-content">
          <h3>Elegant Engagement</h3>
          <p>
            Celebrate the beginning of your journey together with beautifully
            crafted décor, featuring elegant themes, floral accents, and
            personalized setups.Our elegant engagementdécor focuses on 
            sophistication, grace, and timeless beauty. We blend exquisite floral 
            designs,stylish stage setups, and ambient lighting to create a charming
            and romantic atmosphere. Every element is thoughtfully designed to
            make your special day memorable and visually stunning.
          </p>
          <a href="/elegant-engagement" className="learn-more">
            Learn More
            </a>
            </div>
        </motion.div>


        <motion.div
          className="card"
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true,amount:0.3 }}
          transition={{ duration: 0.8}}
        ><div className="card-image">
          <img src={gallery48} alt="reception decoration" /></div>
          <div className="service-content">
          <h3>Reception Night 
                & 
            Theme Decor</h3>
          <p>
            Celebrate your special moments with unique reception and
            theme décor tailored to your vision. Whether you prefer a royal,
            traditional, modern, floral, rustic, or customized theme, our 
            creative team transforms venues into spectacular settings. 
            From stage decoration and entrance designs to table arrangements
            and lighting concepts, we ensure a seamless and elegant celebration.
          </p>
           <a href="/reception-night" className="learn-more">
            Learn More
            </a>
            </div>
        </motion.div>

       
        <motion.div
          className="card"
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true ,amount:0.3}}
          transition={{ duration: 0.8 }}
        ><div className="card-image">
          <img src={gallery6} alt="birthday decoration" /></div>
          <div className="service-content">
          <h3>Memorable Birthdays</h3>
          <p>
        Make every birthday truly special with our customized birthday decoration
        and event planning services.From children's themed parties to elegant milestone
        celebrations, we create vibrant and exciting environments with creative backdrops,
        balloon artistry, floral décor, entertainment arrangements, and personalized themes. 
        Our goal is to turn every birthday into a joyful and unforgettable memory.
          </p>
          <a href="memorable-birthday" className="learn-more">
            Learn More
            </a>
            </div>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true ,amount:0.3}}
          transition={{ duration: 0.8 }}
        >< div className="card-image">
          <img src={gallery37} alt="corporate events" /></div>
          <div className="service-content">
          <h3>Corporate Events</h3>
          <p>
            Elevate your business gatherings with professional event planning,
            modern décor, and seamless execution for conferences, product
            launches, and team-building activities.Professionalism meets
            creativity with our corporate event planning services. We
            organize conferences, product launches, award ceremonies,
            annual meetings, exhibitions, and corporate celebrations with 
            precision and excellence. Our team ensures a well-managed event
            experience through premium stage setups, branding solutions, 
            audiovisual support, and flawless execution.
          </p>
          <a href="corporate-events" className="learn-more">
            Learn More
            </a>
            </div>
        </motion.div>

        

      </div>
    </section>
  );
}

export default Services;