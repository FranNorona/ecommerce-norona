import { Link } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerImg">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dmhprmqnk/image/upload/v1718284613/logoinherit_gos5nh.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="footerContainer">
        <div className="titleFooter">
          <Link to="/" className="linkFooter">
            Todas
          </Link>
          <Link to="/category/botellas" className="linkFooter">
            Botellas
          </Link>
          <Link to="/category/vasos" className="linkFooter">
            Vasos
          </Link>
        </div>
        <div className="privacyTitle">
          <p>Privacy Policy</p>
          <div className="redesContainer">
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              className="iconFooter"
            >
              <FaInstagramSquare size={30} color="white" />
            </Link>
            <Link
              to="https://www.facebook.com/"
              target="_blank"
              className="iconFooter"
            >
              <FaFacebookSquare size={30} color="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
