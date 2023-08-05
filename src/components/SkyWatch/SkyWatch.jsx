import "./SkyWatch.css";

const SkyWatch = () => {
  return (
    <div className="container-proyect-skywatch">
      <img src="https://i.ibb.co/rt3CYVc/SkyWatch.png" alt="Sky Watch" />
      <div className="container-content-skywatch">
        <h3>Sky Watch</h3>
        <p>
          Sky Watch: App desarrollada con React. Con una interfaz minimalista y
          agradable a la vista, SkyWatch muestra instantáneamente el clima de tu
          ubicación actual. Gracias a la integración perfecta con una API de
          clima confiable, obtendrás información precisa sobre las condiciones
          meteorológicas al instante.
        </p>
        <div className="btn-skywatch">
          <a href="https://skywatch-app.netlify.app/">
            <button>Visitar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkyWatch;
