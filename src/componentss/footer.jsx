import logo2 from "../assetso/logo2.jpeg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
      <img src={logo2} alt="Dina Decors Logo" />
      </div>
      <h3>Dina Decors and Event Planners</h3>

      <p>
        Creating memorable events with elegance and style.
      </p>
      <p className="copyright">
        © 2026 Dina Decors and Event Planners. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;