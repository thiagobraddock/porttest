import React from 'react';
import {
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineLaptop,
  AiOutlineInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

import { SiVisualstudiocode } from 'react-icons/si';
function Home() {
  return (
    <>
      <div className="profile">
        <img
          src="https://avatars.githubusercontent.com/u/50876157?v=4"
          alt="profile"
        />
        <h1>THIAGO BRADDOCK</h1>
        <div className="squares">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <section>
        <div className="links">
          <a href="http://www.com" rel="noreferrer" target="_blank">
            <div className="links__content">
              <AiOutlineGithub />
              <h2>/thiagobraddock</h2>
            </div>
          </a>
        </div>
        <div className="links">
          <a href="http://www.com" rel="noreferrer" target="_blank">
            <div className="links__content">
              <AiOutlineLinkedin />
              {/* <h2>Linkedin</h2> */}
            </div>
          </a>
          <a href="http://www.com" rel="noreferrer" target="_blank">
            <div className="links__content">
              <AiOutlineYoutube />
              {/* <h2>Youtube</h2> */}
            </div>
          </a>
          <a href="http://www.com" rel="noreferrer" target="_blank">
            <div className="links__content">
              <AiOutlineInstagram />
              {/* <h2>Instagram</h2> */}
            </div>
          </a>
          <a href="http://www.com" rel="noreferrer" target="_blank">
            <div className="links__content">
              <AiOutlineLaptop />
              {/* <h2>Setup</h2> */}
            </div>
          </a>
          <a href="http://www.com" rel="noreferrer" target="_blank">
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
