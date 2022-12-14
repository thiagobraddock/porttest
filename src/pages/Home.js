import React from 'react';
import {
  AiOutlineYoutube,
  AiOutlineLaptop,
  AiOutlineInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';

import { FaLinkedinIn } from 'react-icons/fa';
import './home.css';

import { SiVisualstudiocode } from 'react-icons/si';
import { Link } from 'react-router-dom';
function Home(props) {
  console.log(props);
  return (
    <>
      <div className="profile">
        <div className="rgb">
          <img
            src="https://avatars.githubusercontent.com/u/50876157?v=4"
            alt="profile"
          />
        </div>
        <h1>
          <small>alô, eu sou o </small>
          <br />
          THIAGO BRADDOCK
        </h1>
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
              <h2>github</h2>
              <AiOutlineGithub />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/profthiago/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="links__content">
              <h2>linkedin</h2>
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://www.youtube.com/programadorcaipira"
            rel="noreferrer"
            target="_blank"
          >
            <div className="links__content">
              <h2>youtube</h2>
              <AiOutlineYoutube />
            </div>
          </a>
          <a
            href="https://www.instagram.com/thiago_braddock/"
            rel="noreferrer"
            target="_blank"
          >
            <div className="links__content">
              <h2>instagram</h2>
              <AiOutlineInstagram />
            </div>
          </a>
          <a href="http://www.google.com" rel="noreferrer" target="_blank">
            <div className="links__content">
              <h2>meu setup</h2>
              <AiOutlineLaptop />
            </div>
          </a>
          <Link to="/portfolio">
            <div className="links__content portfolio">
              <h2>portfolio</h2>
              <SiVisualstudiocode />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
