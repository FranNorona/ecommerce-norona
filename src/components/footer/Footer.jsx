import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerImg">
        <div>
          <img
            src="https://res.cloudinary.com/dmhprmqnk/image/upload/v1718284613/logoinherit_gos5nh.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="footerContainer">
        <div className="titleFooter">
          <Link className="linkFooter">Todas</Link>
          <Link className="linkFooter">Botellas</Link>
          <Link className="linkFooter">Vasos</Link>
        </div>
        <div className="privacyTitle">
          <p>Privacy Policy</p>
          <div className="redesContainer">
            <Link className="iconFooter">
              <FaInstagramSquare size={30} color="white" />
            </Link>
            <Link className="iconFooter">
              <FaFacebookSquare size={30} color="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
