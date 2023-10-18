import React from "react";
import "./footer.css"
export const Foooter = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">Mehdi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#Projects" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/mehdy_vz/" className="home__social-icon" target='_blank'><i class="fa-brands fa-instagram"></i></a>
        <a href="https://github.com/mahdivaez" className="home__social-icon" target='_blank'><i class="fa-brands fa-github"></i></a>
        <a href="https://twitter.com/MehtyVaez" className="home__social-icon" target='_blank'><i class="fa-brands fa-twitter"></i></a>
        </div>
        <span className="footer__copy">
            &#169; MehdiVaez. All rights reserved
        </span>
      </div>
    </footer>
  );
};
