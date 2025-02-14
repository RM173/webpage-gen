
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import './Hero.css'

import EarlyAccessModal from "./EarlyAccessModal";
import config from "../config";

export default function Hero() {

  const [showModal, setShowModal] = useState(false);

  const location = useLocation();
  const pathName = location.pathname.substring(1).toLowerCase();

	const handleModalClose = () => {
		setShowModal(false);
	};

  return (
    <section>
      <div className="container">

        {/* Hero content */}
        <div className="hero-content">

          {/* Section header */}
          <div className="section-header">
            <h1 className="title">{config[pathName]?.upperHeader}</h1>
            <p className="description">{config[pathName]?.upperParagraph}</p>
            <div className="cta-buttons">
              <div>
                <a className="cta-btn" href="#0" onClick={() => setShowModal(true)}>Start free trial</a>
              </div>
              {showModal && <EarlyAccessModal onClose={handleModalClose} />}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
