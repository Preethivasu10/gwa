import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css'; // Ensure you create and import the CSS file

function Footerr() {
  return (
    <div className="footer-containers" >
    <div className="footer-container">
      <div className="text-container">
        <h3 className='header'>Be notified when our beta launches</h3>
        <p>We want to keep you up to date once we launch our beta version so that you are the first to experience this platform. Please fill out this short form below to be notified once we go live.</p>
      </div>
      <div className="email-container">
        <input type="text" placeholder="Enter your email..." className="email-box"/>
        <button className="email-button">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </div>
    </div>
    </div>
  );
}

export default Footerr;
