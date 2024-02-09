import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-contact">
        <h3 className='color'>Contact Me</h3>
        <p>Email: itsme.ashay@gmail.com</p>
        <p>Phone: +91-8401664584</p>
      </div>
      <div className="footer-social">
        <h3 className='color'>Connect With Me</h3>
        <ul className="social-icons">
          <li><a href="https://github.com/ashay0207" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/ashay-shah-19525a17b" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
        </ul>
      </div>
      <div className="footer-back-to-top">
        <a href="#top" className='color'><i className="fas fa-arrow-up"></i> Back to Top</a>
      </div>
      <div className="footer-copyright">
        <p >© 2024 Ashay Shah. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
