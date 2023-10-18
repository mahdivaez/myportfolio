import React from "react";
import "./services.css";
import { useState } from "react";

export const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-code services__icon"></i>
            <h3 className="services__title">
              Junior <br /> Developer
            </h3>
          </div>
          <span onClick={() => toggleTab(3)} className="services__button">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "services__modal active-modal" : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Junior Developer</h3>
              <p className="services__modal-description">
                Junior developer with a passion for coding and problem-solving. I am eager to learn and contribute to projects.
              </p>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Building responsive and interactive web applications
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Front-end development using React</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Debugging and troubleshooting code issues
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Collaborating with team members on projects
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Learning new technologies and frameworks
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Add more services here */}
        <div className="services__content">
  <div>
    <i className="uil uil-paint-roller services__icon"></i>
    <h3 className="services__title">
      UI/UX <br /> Design
    </h3>
  </div>
  <span onClick={() => toggleTab(4)} className="services__button">
    View More
    <i className="uil uil-arrow-right services__button-icon"></i>
  </span>

  <div
    className={
      toggleState === 4 ? "services__modal active-modal" : "services__modal"
    }
  >
    <div className="services__modal-content">
      <i
        onClick={() => toggleTab(0)}
        className="uil uil-times services__modal-close"
      ></i>
      <h3 className="services__modal-title">UI/UX Design</h3>
      <p className="services__modal-description">
        Creating visually appealing and user-friendly interfaces for web and mobile applications.
      </p>
      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            Wireframing and prototyping user interfaces
          </p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">User research and usability testing</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            Creating responsive designs for different devices
          </p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            Collaborating with developers to implement designs
          </p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            Conducting user interviews and gathering feedback
          </p>
        </li>
      </ul>
    </div>
  </div>
</div>

        <div className="services__content">
  <div>
    <i className="uil uil-database services__icon"></i>
    <h3 className="services__title">
      MySQL/SQL <br /> Database Design
    </h3>
  </div>
  <span onClick={() => toggleTab(5)} className="services__button">
    View More
    <i className="uil uil-arrow-right services__button-icon"></i>
  </span>

  <div
    className={
      toggleState === 5 ? "services__modal active-modal" : "services__modal"
    }
  >
    <div className="services__modal-content">
      <i
        onClick={() => toggleTab(0)}
        className="uil uil-times services__modal-close"
      ></i>
      <h3 className="services__modal-title">Junior MySQL/SQL Database Design</h3>
      <p className="services__modal-description">
        Designing efficient and well-structured databases for junior MySQL and SQL applications.
      </p>
      <ul className="services__modal-services grid">
        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            Entity-relationship modeling and database schema design
          </p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">Normalization and optimization of database structures</p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            Query optimization and performance tuning for efficient data retrieval
          </p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            Integration with backend systems and APIs
          </p>
        </li>

        <li className="services__modal-service">
          <i className="uil uil-check-circle services__modal-icon"></i>
          <p className="services__modal-info">
            Data migration and synchronization between databases
          </p>
        </li>
      </ul>
    </div>
  </div>
</div>
        
        

      </div>
    </section>
  );
};