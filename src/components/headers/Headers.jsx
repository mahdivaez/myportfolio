import React, { useState } from "react";
import "./Headers.css";

export const Headers = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Mehdi
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="fas fa-home nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="fas fa-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="fas fa-file nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="fas fa-briefcase nav__icon"></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#Projects" className="nav__link">
                <i className="fas fa-image nav__icon"></i>Projects
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="fas fa-paper-plane nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i className="fas fa-times nav__close" onClick={handleToggle}></i>
        </div>

        <div className="nav__toggle" onClick={handleToggle}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
};