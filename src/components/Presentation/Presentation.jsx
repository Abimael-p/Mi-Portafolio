import "./Presentation.css";

const Presentation = () => {
  return (
    <div id="prev" className="image-backgraund">
      <div className="container_presentation">
        <div className="welcome">
          <p>BIENVENIDOS</p>
        </div>
        <div className="name_presentations">
          <p>Soy</p>
          <p>
            <b>Abimael Pacheco,</b>
          </p>
          <p>desarrollador Back-End</p>
        </div>
        <div className="btn-github">
          <a href="https://github.com/Abimael-p">
            <button>Ver Portafolio</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
