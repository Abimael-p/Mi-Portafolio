import "./AppointmentApp.css";

const AppointmentApp = () => {
    return (
      <div id="proyect" className="container-proyect-appointmentApp">
        <img
          src="https://i.ibb.co/kq5jZKF/Appointment-App.png"
          alt="AppointmentApp"
        />
        <div className="container-content-appointmentApp">
          <h3>Appointment App</h3>
          <p>
          En el mundo de la simulación 'nocountry', desarrollamos una innovadora 
          aplicación para gestionar citas con especialistas. Los clientes pueden 
          programar citas fácilmente con los especialistas disponibles, disfrutando 
          de una experiencia de usuario fluida y eficiente.
          </p>
          <div className="btn-appointmentApp">
            <a href="https://appointment-app-chi.vercel.app/">
              <button>Visitar</button>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default AppointmentApp;