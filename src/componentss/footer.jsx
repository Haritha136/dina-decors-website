import logo7 from "../assetso/logo7.jpeg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src={logo7} alt="Dina Decors Logo" />
      </div>
      <h3>Dina Decors & Event Planners</h3>

      <p>
        Creating memorable events with elegance and style.
      </p>
      <div className="footer-contact">
        <p>📞 +91 8113917460, +91 8111900460</p>
        <p>✉️ dinadecors84@gmail.com</p>
        <p>📍 Kollam, Kerala</p>
      </div>
      <p className="copyright">
        © 2026 Dina Decors and Event Planners. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;