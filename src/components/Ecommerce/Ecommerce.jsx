import "./Ecommerce.css";

const Ecommerce = () => {
  return (
    <div id="proyect" className="container-proyect-ecommerce">
      <img src="https://i.ibb.co/xHvPgDg/Ecommerce.png" alt="Ecommerce" />
      <div className="container-content-ecommerce">
        <h3>Ecommerce</h3>
        <p>
          Ecommerce: Una potente app de React que simula un inicio de sesión de
          usuarios, permitiéndoles acceder a sus compras y perfiles. Además,
          ofrece la opción de comprar productos con la posibilidad de elegir la
          cantidad deseada. La app también cuenta con funcionalidades de
          filtrado, permitiendo a los usuarios buscar productos por nombre o
          categoría.
        </p>
        <div className="btn-ecommerce">
          <a href="https://ecommerce-app-ecapp.netlify.app/">
            <button>Visitar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
