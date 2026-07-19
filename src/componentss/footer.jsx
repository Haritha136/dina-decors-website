import logo7 from "../assetso/logo7.jpeg";
import { FaPhoneAlt, FaEnvelope,FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Contact */}
        <div className="footer-left">

          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>CALL US</h4>
              <p>+91 8113917460</p>
              <p>+91 8111900460</p>
            </div>
          </div>
          <div className="contact-item">
            <FaInstagram className="icon" />
            <div>
              <h4>DM US</h4>
              <p>_dina_decoration</p>
            </div>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>EMAIL US</h4>
              <p>dinadecors84@gmail.com</p>
            </div>
          </div>
         

          <div className="contact-item">
            <FaLocationDot className="icon" />
            <div>
              <h4>OUR LOCATIONS</h4>
              <p>Kollam, Thiruvananthapuram</p>
              <p>Pathanamthitta, Alappuzha</p>
            </div>
          </div>

        </div>

        {/* Center */}
        <div className="footer-center">

          <div className="footer-logo">
            <img src={logo7} alt="Dina Decors Logo" />
          </div>

          <h3>Dina Decors & Event Planners</h3>

          <p className="tagline">
            Creating memorable events with elegance and style.
          </p>

          <h4 className="footer-heading">ABOUT US</h4>

          <p className="footer-description">
            We specialize in luxury weddings, receptions, birthdays,
            engagements, and corporate events. Every celebration is
            thoughtfully designed with creativity, elegance, and
            meticulous attention to detail, ensuring unforgettable
            moments for you and your guests.
          </p>
           <div className="footer-social">
  <p className="follow-text">Follow us on Instagram</p>
  <a
    href="https://www.instagram.com/_dina_decoration/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
</div>

        </div>

        {/* Empty column to keep center perfectly centered */}
        <div className="footer-right"></div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Dina Decors & Event Planners. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;