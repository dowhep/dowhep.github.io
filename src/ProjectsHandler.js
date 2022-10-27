import ghimg from './Icons/githubwhite.png';
import itchimg from './Icons/itchiowhite.svg';

// load data
const data = require('./projects.json');
// const len = Object.keys(data).length;

// the export var
const projects = [];
let k = 1;

// icon generation
const generateLinkIcons = (github, itchio) => {
  return (
    <div className="proj_icons">
      {itchio ? (
        <a href={itchio} target="_blank" rel="noreferrer">
          <img src={itchimg} className="proj_icon" alt="itch.io" />
        </a>
      ) : null}
      {github ? (
        <a href={github} target="_blank" rel="noreferrer">
          <img src={ghimg} className="proj_icon" alt="github" />
        </a>
      ) : null}
    </div>
  );
};

data.forEach((proj) => {
  projects.push(
    <div className="proj_container" key={k++}>
      <div className="proj_name">{proj.name}</div>
      <div className="proj_tech">{proj.tech}</div>
      <div className="proj_desc">{proj.desc}</div>
      {generateLinkIcons(proj.github, proj.itchio)}
    </div>
  );
});

export { projects };
