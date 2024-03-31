import "./RickAndMorty.css";

const RickAndMorty = () => {
  return (
    <div id="proyect" className="container-proyect-rick-and-morty">
      <img
        src="https://i.ibb.co/JsTjhB1/Rich-And-Morty.png"
        alt="rick and morty"
      />
      <div className="container-content-rick-and-morty">
        <h3>Rick And Morty</h3>
        <p>
          Rick And Morty: La completa app de React que te brinda acceso a una
          amplia API llena de información detallada sobre los universos y
          personajes de la famosa serie. Explora minuciosamente cada universo,
          descubre a fondo los rasgos y características de los personajes
          residentes. Con una interfaz intuitiva y fácil de usar.
        </p>
        <div className="btn-rick-and-morty">
          <a href="https://rickandmorty-universe.netlify.app/">
            <button>Visitar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RickAndMorty;
