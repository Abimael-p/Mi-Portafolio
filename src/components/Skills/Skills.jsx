import "./Skills.css";

const Skills = () => {
  return (
    <div className="container-Skill-img">
      <div className="container-skills">
        <h2>Habilidades</h2>
        <div className="container-content-skills">
          <ul>
            <li>
              <i className="bx bxl-nodejs"></i>
              <p>Node.js</p>
            </li>
            <li>
              <i className="bx bxl-postgresql"></i>
              <p>PostgreSQL</p>
            </li>
            <li>
              <i className="bx bxl-html5"></i>
              <p>HTML5</p>
            </li>
            <li>
              <i className="bx bxl-git"></i>
              <p>Git</p>
            </li>
            <li>
              <i className="bx bxl-react"></i>
              <p>React</p>
            </li>
            <li>
              <i className="bx bxl-github"></i>
              <p>GitHub</p>
            </li>
            <li>
              <i className="bx bxl-css3"></i>
              <p>CSS3</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
