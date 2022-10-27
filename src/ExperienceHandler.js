// load data
const data = require('./experience.json');
// const len = Object.keys(data).length;

// the export var
const experience = [];
let k = 1;

data.forEach((exp) => {
  experience.push(
    <div className="exp_container" key={k++}>
      <a href={exp.url} target="_blank" rel="noreferrer">
        <img src={exp.image} className="exp_image" alt={exp.alt}/>
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

export { experience };
