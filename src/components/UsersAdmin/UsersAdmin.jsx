import "./UsersAdmin.css";

const UsersAdmin = () => {
  return (
    <div id="proyect" className="container-proyect-users-admin">
      <img src="https://i.ibb.co/J7ZVyrs/UserAmid.png" alt="Users Admin" />
      <div className="container-content-users-admin">
        <h3>Users Admin</h3>
        <p>
          UserAdmin: App de React para gestionar usuarios de manera eficiente
          con estilo limpio. Crea, actualiza y elimina usuarios utilizando una
          API segura. Control total en tus manos.
        </p>
        <div className="btn-users-admin">
          <a href="https://users-admin-app.netlify.app/">
            <button>Visitar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsersAdmin;
