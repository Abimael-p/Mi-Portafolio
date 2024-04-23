import Ecommerce from "../Ecommerce/Ecommerce";
import FortuneCookies from "../FortuneCookies/FortuneCookies";
import RickAndMorty from "../RickAndMorty/RickAndMorty";
import SkyWatch from "../SkyWatch/SkyWatch";
import UsersAdmin from "../UsersAdmin/UsersAdmin";
import AppointmentApp from "../AppointmentApp/AppointmentApp";
import { useState } from "react";
import "./Proyects.css";

const Proyects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [<Ecommerce />, <FortuneCookies />, <RickAndMorty />, <SkyWatch />, <UsersAdmin />, <AppointmentApp />];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="container-proyects">
      <h2>Mis Front-End</h2>
      <div className="card-proyect">
        <i className="bx bx-chevrons-left" onClick={handlePrev}></i>
        {projects[currentIndex]}
        <i className="bx bx-chevrons-right" onClick={handleNext}></i>
      </div>
    </section>
  );
};

export default Proyects;
