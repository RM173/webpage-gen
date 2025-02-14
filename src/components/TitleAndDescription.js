
import React from 'react'
import { useLocation } from "react-router-dom";
import './TitleAndDescription.css'

import config from "../config";

export default function TitleAndDescription() {
  const location = useLocation();
  const pathName = location.pathname.substring(1).toLowerCase();
  return (
    <section>
      <div className="container">

        {/* Hero content */}
        <div className="content">

          {/* Section header */}
          <div className="section-header">
            <h1 className="title">{config[pathName]?.lowerHeader}</h1>
            <p className="description">{config[pathName]?.lowerParagraph}</p>
            {/* <div className="cta-buttons">
              <div>
                <a className="cta-btn" href="#0">Start free trial</a>
              </div>
            </div> */}
          </div>

        </div>

      </div>
    </section>
  )
}
