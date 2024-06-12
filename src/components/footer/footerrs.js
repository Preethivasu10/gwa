import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footerrs.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-footer-container">
        <div className="custom-footer-logo">
        <img className='gwaimage' src="https://s3-alpha-sig.figma.com/img/7fc0/999e/24519e1875e95dc594545f489a4b61a6?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CpaY50yC4P5oMvTIjLa7yI8651rzyZ0CiDtqzBTRBTYdJ1nFaSNUwBthA9U3AdHGI-lN5sTCp0n9uYtdgALHQye0CELuSYgSXDaq~oBWHw4gNqvyu-rIcBsR29tDUsIn0bWZJ3TKnJOjyscSLIR3beYL~kJNIEb3n3k3qoRrCaU0H79EzS8KjbO4gwK6kSVnMd6hmWvsJktQe5x3IvGRCzkJXTM26k4CNKiCGK3-Y5Qp-5YnUisngJ4SssjBaquvto-XO3Py0Td4jeJ8ldrLlwIGvzxSADpfrZVh7N1wUTqZvD6D-pZt1tIPEfIRKr3iTkZGNuRL8ni7svWx4Xcedg__" alt="Description of the image"/>

          <div className="custom-footer-socials">
            <div className="custom-social-icon">
              <FaFacebookF />
            </div>
            <div className="custom-social-icon">
              <FaTwitter />
            </div>
            <div className="custom-social-icon">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="custom-footer-links">
          <div className="custom-footer-column">
            <h4>Explore</h4>
            <ul>
              <li>Home Page</li>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="custom-footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Documentation</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className="custom-footer-column">
            <h4>Subscribe</h4>
            <p className='para'>Subscribe to get the latest news  from us</p>
            <div className="custom-subscribe-form">
              <input type="email" placeholder="Email Address" />
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="white" d="M2 21l21-9-21-9v7l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-footer-bottom">
        <p>© 2024 Global Wellness Alliance. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
