import "./ApiEcommerce.css";

const ApiEcommerce = () => {
  return (
    <div className="container-content-api-ecommerce">
      <h2>Api-Ecommerce</h2>
      <div className="container-i-ico-service">
        <i className="bx bx-server"></i>
      </div>
      <p className="Api-ecommerce">
        Api de Ecommerce creada con Node.js, express y JavaScript, donde se compone de 
        Usuarios y Autenticación, Productos y Categorías, Compras, Gestión de Imágenes, y 
        Gestión de Inventarios.
      </p>
      <div className="container-service-api-ecommerce-btn">
        <div className="btn-service-api-ecommerce">
          <a href="https://api-movies-953k.onrender.com/">
            <button>Ver doct</button>
          </a>
        </div>
        <div className="btn-service-api-ecommerce">
          <a href="https://www.postman.com/bold-comet-805925/workspace/movies-db/overview">
            <button>Ver servicio</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApiEcommerce;