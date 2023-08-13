import "./VerificationApi.css";

const VerificationApi = () => {
  return (
    <div className="container-content-api-verification">
      <h2>Veryfication_api</h2>
      <div className="container-i-ico-service-verification">
        <i className="bx bx-server"></i>
      </div>
      <p className="Api-verification">
        Api de verificación de email y contraseña, creada con Node.js, express y JavaScript, 
        donde la actualización de la contraseña o el email están protegidos para mayor 
        seguridad.
      </p>
      <div className="container-service-api-verification-btn">
        <div className="btn-service-api-verification">
          <a href="https://api-user-verification-db.onrender.com/">
            <button>Ver servicio</button>
          </a>
        </div>
        <div className="btn-service-api-verification">
          <a href="https://www.postman.com/bold-comet-805925/workspace/veryfication-api/overview">
            <button>Ver doct</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerificationApi;
