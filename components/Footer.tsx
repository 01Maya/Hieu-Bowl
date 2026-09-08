import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-topline">
        <span>Vietnamese comfort, served bright.</span>
        <span aria-hidden="true">✦</span>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-kicker">HIEU BOWL KITCHEN</span>
          <a className="brand" href="#top" aria-label="Hieu Bowl home">
            HIEU <span>BOWL</span>
            <i />
          </a>
          <p>
            Fresh Vietnamese bowls
            <br />
            made with feeling.
          </p>
          <a className="footer-order-link" href="#start">
            Order something good <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-links">
          <div>
            <strong>Explore</strong>
            <a href="#about">About Us</a>
            <a href="#menu">Our Menu</a>
            <a href="#start">Contact Us</a>
          </div>
          <div>
            <strong>Say hello</strong>
            <a href="mailto:hello@hieubowl.com">hello@hieubowl.com</a>
            <a href="tel:+12125550184">+1 212 555 0184</a>
            <a href="#top">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Hieu Bowl Kitchen</span>
        <div>
          <a href="#top">Privacy</a>
          <a href="#top">Accessibility</a>
          <a href="#top">Terms</a>
        </div>
        <span>Made fresh in NYC</span>
      </div>
    </footer>
  );
}
