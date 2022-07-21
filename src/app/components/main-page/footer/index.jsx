import React from "react";
import "./footer.css";
import facebookLogo from "../../../assets/images/svg/Facebook-Logo.png";
import instLogo from "../../../assets/images/svg/Instagram-Logo.png";

export const Footer = () => {
  return (
    <div className="container-fluid footer__block">
      <div className="row footer__inner">
        <div className="footer__sector col-xs-12 col-sm-6 col-lg-3 col-xl-3">
          <div className="sector__inner">
            <span className="footer-title">Ми у соц. мережах</span>
            <ul className="social__links">
              <li className="social__logo-box1">
                <a href="https://www.facebook.com/Praga_cafe_khodoriv-104316325036778">
                  <img
                    className="social__logo-img"
                    src={facebookLogo}
                    alt="facebook__logo"
                  />
                </a>
              </li>
              <li className="social__logo-box2">
                <a href="https://www.instagram.com/praga_cafe_khodoriv/">
                  <img
                    className="social__logo-img"
                    src={instLogo}
                    alt="instagram_logo"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__sector col-xs-12 col-sm-6 col-lg-3 col-xl-3">
          <div className="sector__inner">
            <span className="footer-title">Контакти</span>
            <div className="footer__contacts-box">
              <a
                type="email"
                className="contacts telephone"
                href="mailto: dijkakhodoriv@gmail.com">
                <i className="bi bi-envelope"></i> dijkakhodoriv@gmail.com
              </a>
              <a
                type="tel"
                className="contacts telephone"
                style={{ fontSize: "1rem" }}
                href="tel:+380964828292">
                <i className="bi bi-telephone"></i> +38 (096) 48 28 292
              </a>
            </div>
          </div>
        </div>
        <div className="footer__sector col-xs-12 col-sm-6 col-lg-3 col-xl-3">
          <div className="sector__inner">
            <span className="footer-title">Адреса</span>
            м. Ходорів <br />
            вул. Шевченка 1А
          </div>
        </div>
        <div className="footer__sector col-xs-12 col-sm-6 col-lg-3 col-xl-3">
          <div className="sector__inner">
            <span className="footer-title">Час роботи</span>
            Пн-Нд: 09:00-22:00
          </div>
        </div>
      </div>
    </div>
  );
};
