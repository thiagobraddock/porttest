import React from 'react';
import {
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineLaptop,
  AiOutlineInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

import './home.css';

import { SiVisualstudiocode } from 'react-icons/si';
function Home() {
  return (
    <>
      <div className="profile">
        <div className="rgb">
          <img
            src="https://avatars.githubusercontent.com/u/50876157?v=4"
            alt="profile"
          />
        </div>
        <h1>THIAGO BRADDOCK</h1>
        <div className="squares">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <section>
        <div className="links">
          <a
            href="https://github.com/thiagobraddock"
            rel="noreferrer"
            target="_blank"
          >
            <div className="links__content">
              <AiOutlineGithub />
              <h2>/thiagobraddock</h2>
            </div>
          </a>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/profthiago/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="links__content">
              <AiOutlineLinkedin />
              {/* <h2>Linkedin</h2> */}
            </div>
          </a>
          <a
            href="https://www.youtube.com/programadorcaipira"
            rel="noreferrer"
            target="_blank"
          >
            <div className="links__content">
              <AiOutlineYoutube />
              {/* <h2>Youtube</h2> */}
            </div>
          </a>
          <a
            href="https://www.instagram.com/thiago_braddock/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="links__content">
              <AiOutlineInstagram />
              {/* <h2>Instagram</h2> */}
            </div>
          </a>
          <a href="http://www.google.com" rel="noreferrer" target="_blank">
            <div className="links__content">
              <AiOutlineLaptop />
              {/* <h2>Setup</h2> */}
            </div>
          </a>
          <a href="http://www.google.com" rel="noreferrer" target="_blank">
            <div className="links__content portfolio">
              <SiVisualstudiocode />
              <h2>PORTFOLIO</h2>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
