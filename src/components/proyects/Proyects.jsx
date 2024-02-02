import Ecommerce from "../Ecommerce/Ecommerce";
import FortuneCookies from "../FortuneCookies/FortuneCookies";
import RickAndMorty from "../RickAndMorty/RickAndMorty";
import SkyWatch from "../SkyWatch/SkyWatch";
import UsersAdmin from "../UsersAdmin/UsersAdmin";
import AppointmentApp from "../AppointmentApp/AppointmentApp";
import "./Proyects.css";

const Proyects = () => {
  return (
    <section id="proyect" className="container-proyects">
      <h2>Mis Front-End</h2>
      <div className="card-proyect">
        <SkyWatch />
        <RickAndMorty />
        <Ecommerce />
        <FortuneCookies />
        <UsersAdmin />
        <AppointmentApp />
      </div>
    </section>
  );
};

export default Proyects;
