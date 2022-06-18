// load data
const data = require('./projects.json');
// const len = Object.keys(data).length;

// the export var
const projects = [];
let k = 1;

data.forEach((proj) => {
  projects.push(
    <div className="proj_container" key={k++}>
      <a href={proj.url} className="proj_name">
        {proj.name}
      </a>
      <div className="proj_tech">{proj.tech}</div>
      <div className="proj_desc">{proj.desc}</div>
    </div>
  );
});

export { projects };
