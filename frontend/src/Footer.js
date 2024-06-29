//TODO: Group-Website logo path will be added to row 11
//TODO: The not part on row 15 will be designed

export default function Footer(){
    return(
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <a href="/" className="logo">
                  <img src="/path-to-your-logo.png" alt="Group-Website Logo" className="logo-img" />
                  <span className="logo-text">Group-Website</span>
                </a>
                <p className="footer-text">
                  We've been crafting beautiful websites, launching stunning brands and making clients happy for years. With our prestigious craftsmanship.
                </p>
              </div>
              <div className="footer-section">
                <h2 className="footer-title">Company</h2>
                <ul className="footer-list">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">FAQ's</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h2 className="footer-title">Useful Links</h2>
                <ul className="footer-list">
                  <li><a href="#">Our process</a></li>
                  <li><a href="#">People</a></li>
                  <li><a href="#">Client</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h2 className="footer-title">Follow Us</h2>
                <ul className="footer-list">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Google Plus</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2023 Group-Website </p>
              <div className="social-icons">
                <a href="#" className="social-icon">F</a>
                <a href="#" className="social-icon">T</a>
                <a href="#" className="social-icon">G</a>
                <a href="#" className="social-icon">P</a>
                <a href="#" className="social-icon">I</a>
              </div>
            </div>
          </div>
        </footer>
  );
};