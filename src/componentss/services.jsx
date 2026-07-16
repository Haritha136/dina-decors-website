import { motion } from "framer-motion";
import gallery24 from "../assetso/gallery24.png";
import gallery2 from "../assetso/gallery2.jpeg";
import gallery18 from "../assetso/gallery18.png";
import gallery7 from "../assetso/gallery7.png";
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
            match your dream celebration.
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
            Transform any space with our exquisite floral arrangements,
            featuring a wide variety of fresh blooms and seasonal designs
            tailored to your specific event and style preferences.
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
            crafted engagement décor, featuring elegant themes, floral accents,
            and personalized setups.
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
          <img src={gallery2} alt="reception decoration" /></div>
          <div className="service-content">
          <h3>Reception Night 
                & 
            Theme Decor</h3>
          <p>
            Enhance your reception with stylish backdrops, premium floral
            designs, ambient lighting, and sophisticated decorations that leave
            a lasting impression.
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
          <img src={gallery7} alt="birthday decoration" /></div>
          <div className="service-content">
          <h3>Memorable Birthdays</h3>
          <p>
            Make every birthday special with creative themes, colorful balloon
            arrangements, customized backdrops, and vibrant decorations for all
            age groups.
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
            launches, and team-building activities.
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