import { motion } from "framer-motion";
import heroVideo from "../assetso/vid3.mp4";
import {Link} from "react-router-dom";

function Hero() {
  return (
    <section id="home" className="hero">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1>Creating Unforgettable Celebrations</h1>

        <p>
          Wedding • Reception • Engagement • Corporate Events
        </p>

        <a
  href="https://wa.me/918113917460?text=Hi%20Dina%20Decors,%20I%20would%20like%20a%20free%20consultation."
  target="_blank"
  rel="noopener noreferrer"
  className="hero-btn"
>
  Free Consultation ➜
</a>
      </motion.div>

    </section>
  );
}

export default Hero;