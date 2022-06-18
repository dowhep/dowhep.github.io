// import logo from './logo.svg';

import './App.scss';
import linkedinblack from './Icons/linkedinblack.svg';
import linkedinwhite from './Icons/linkedinwhite.svg';
import itchioblack from './Icons/itchioblack.svg';
import itchiowhite from './Icons/itchiowhite.svg';
import githubblack from './Icons/githubblack.png';
import githubwhite from './Icons/githubwhite.png';
import { experience } from './ExperienceHandler.js';
import { projects } from './ProjectsHandler.js';

const linkedinlink = 'https://www.linkedin.com/in/caogang-shen-50772b1b7/';
const itchiolink = 'https://dowhep.itch.io/';
const githublink = 'https://github.com/dowhep';
const myemail = 'marcelo.cshen@gmail.com';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Parallax">
          {/* <div className="Parallax_Group">
            <div className="Parallax_BG Parallax_BG1" />
            <div className="Parallax_BG Parallax_BG2" />
            <div className="Parallax_BG Parallax_BG3" />
            <div className="Parallax_BG Parallax_BG4" />
            <div className="Parallax_BG Parallax_TXT" />
          </div> */}
          <div className="bg">
            <div className="myname">
              <div className="iconsblack">
                <a href={itchiolink}>
                  <img src={itchioblack} className="iconblack" />
                </a>
                <a href={githublink}>
                  <img src={githubblack} className="iconblack" />
                </a>
                <a href={linkedinlink}>
                  <img src={linkedinblack} className="iconblack" />
                </a>
              </div>
            </div>
          </div>

          <div className="sectionheader">Projects</div>
          <hr className="projectsline" />
          <div className="projects">{projects}</div>
          <hr className="projectsline" />

          <div className="sectionheader">Experience</div>
          <div className="experience">{experience}</div>

          <div className="horizontalflex">
            <div>
              <div className="sectionheader">Portfolio</div>
              <div className="iconswhite">
                <a href={itchiolink}>
                  <img src={itchiowhite} className="iconwhite" />
                </a>
                <a href={githublink}>
                  <img src={githubwhite} className="iconwhite" />
                </a>
                <a href={linkedinlink}>
                  <img src={linkedinwhite} className="iconwhite" />
                </a>
              </div>
            </div>
            <div>
              <div className="sectionheader">Contact Me</div>
              <div className="contact_email">{myemail}</div>
            </div>
          </div>
          <div className="whitespace" />
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;