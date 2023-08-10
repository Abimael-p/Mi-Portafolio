import "./ApiMovies.css";

const ApiMovies = () => {
  return (
    <div className="container-content-api-movies">
      <h2>Api-Movies</h2>
      <div className="container-i-ico-service">
        <i className="bx bx-server"></i>
      </div>
      <p className="Api-movies">
        Api de películas creada con Node.js, express y JavaScript, donde cada película tiene 
        muchos actores, muchos géneros, muchos directores.
      </p>
      <div className="container-service-api-movies-btn">
        <div className="btn-service-api-movies">
          <a href="https://api-movies-953k.onrender.com/">
            <button>Ver doct</button>
          </a>
        </div>
        <div className="btn-service-api-movies">
          <a href="https://www.postman.com/bold-comet-805925/workspace/movies-db/overview">
            <button>Ver servicio</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApiMovies;
