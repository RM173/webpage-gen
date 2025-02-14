import React, { useState } from "react";
import './Footer.css';

import EarlyAccessModal from "./EarlyAccessModal";

export default function Footer() {

    // Get current domain name
  const domain = window.location.hostname;

  const [showModal, setShowModal] = useState(false);

	const handleModalClose = () => {
		setShowModal(false);
	};

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <section>
          <p className='register-section'>
            <span className='register-text'>Register for free</span>
            <button className='register-button' onClick={() => setShowModal(true)}>
              Sign up!
            </button>
            {showModal && <EarlyAccessModal onClose={handleModalClose} />}
          </p>
        </section>
      </div>

      <div className='copyright-section'>
        © 2025 Copyright:{' '} 
        <a className='copyright-link' href='/'>
            {domain}
        </a>
      </div>
    </footer>
  );
}