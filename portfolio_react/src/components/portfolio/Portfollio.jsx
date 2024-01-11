import React from "react";
import "./Portfolio.css";

// import calculator from "../../assests/calculator.png";
// import clock from "../../assests/clock.png";
// import tribute from "../../assests/tribute_page.png";
// import netflix from "../../assests/netflix.png";
// import todolist from "../../assests/todolist.png";
// import weather from "../../assests/weather_website.png";
// import Travel from "../../assests/travel_website.png";
// import portfoliowb from "../../assests/portfolio.png";
// import webex from "../../assests/webex.png";

import androidwb from "../../assests/Android.png";
import webprojects from "../../assests/website-projects.png";

const Portfollio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={calculator} alt="" />
          </div>
          <h3>Calculator</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/OIBSIP_calculator"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://basic-calculator-mocha.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={clock} alt="" />
          </div>
          <h3>Time-Clock</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/time_clock"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://time-clock-one.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={tribute} alt="" />
          </div>
          <h3>Tribute-Page</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/OIBSIP_Tribute-Page"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://tribute-page-lake.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={netflix} alt="" />
          </div>
          <h3>Netflix Ui/Ux Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/netflix-clone"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://netflix-clone-virid-ten.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={todolist} alt="" />
          </div>
          <h3>To-Do-List</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/OIBSIP_ToDoList-Website"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://to-do-list-one-ashy.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={weather} alt="" />
          </div>
          <h3>Weather Project </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/weather_website"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://weather-website-theta-drab.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Travel} alt="" />
          </div>
          <h3>Travel Website</h3>
          <div className="portfolio__item-cta">
            <a href="github.com" className="btn" target="_blank">
              github
            </a>
            <a href="github.com" className="btn btn-primarty" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={portfoliowb} alt="" />
          </div>
          <h3>Portfolio Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/travel_karo"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://travel-karo.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article> */}
{/* 
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={webex} alt="" />
          </div>
          <h3>Web Extension Project</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/web-development-all-projects"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://web-development-all-projects.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article> */}

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={webprojects} alt="" />
          </div>
          <h3>Web Projects</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/web-development-all-projects"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://web-development-all-projects.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={androidwb} alt="" />
          </div>
          <h3>Android Apps Projects</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/gp-18/Android-Apps-Videos-Website"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://android-apps-videos-website.vercel.app/"
              className="btn btn-primarty"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfollio;
