import Ecommerce from "../Ecommerce/Ecommerce";
import FortuneCookies from "../FortuneCookies/FortuneCookies";
import RickAndMorty from "../RickAndMorty/RickAndMorty";
import SkyWatch from "../SkyWatch/SkyWatch";
import UsersAdmin from "../UsersAdmin/UsersAdmin";
import "./Proyects.css";

const Proyects = () => {
  return (
    <section id="proyect" className="container-proyects">
      <h2>Mis Proyectos</h2>
      <div className="card-proyect">
        <SkyWatch />
        <RickAndMorty />
        <Ecommerce />
        <FortuneCookies />
        <UsersAdmin />
      </div>
    </section>
  );
};

export default Proyects;
