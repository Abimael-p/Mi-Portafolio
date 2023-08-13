import "./UserCrud.css";

const UserCrud = () => {
  return (
    <div className="container-content-api">
      <h2>UserCrud</h2>
      <div className="container-i-ico">
        <i className="bx bx-server"></i>
      </div>
      <p className="Api-crud">
        Api creada con Node.js, express y JavaScript, donde se puede ver, crear,
        eliminar, actualizar y llamar por id a usuarios
      </p>
      <div className="container-service-api-btn">
        <div className="btn-service-api">
          <a href="https://api-crud-users-5871.onrender.com/">
            <button>Ver servicio</button>
          </a>
        </div>
        <div className="btn-service-api">
          <a href="https://www.postman.com/bold-comet-805925/workspace/crud-users">
            <button>Ver doct</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCrud;
