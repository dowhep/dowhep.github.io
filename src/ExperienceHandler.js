// load data
const data = require('./experience.json');
const len = Object.keys(data).length;

// the export var
const content = [];
let k = 1;

data.forEach((exp) => {
  content.push(
    <div className="exp_container" key={k++}>
      <a href={exp.url}>
        <img src={exp.image} className="exp_image" />
      </a>
      <div className="exp_text">
        <div className="exp_name">{exp.name}</div>
        <div className="exp_position">{exp.position}</div>
        <div className="exp_duration">{exp.duration}</div>
        <div className="exp_desc">{exp.description}</div>
      </div>
    </div>
  );
});

export { content };
