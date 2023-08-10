import { useState } from "react";
import Contact from "../common/contact/Contact";
import Modal from "../Modal/Modal";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClikOpen = (e) => {
    e.preventDefault()
    if(isOpen == false){
    setIsOpen(true) 
    } else { 
      setIsOpen(false)
    }
  };

  return (
    <>
      <header className="header_app">
        <div className="Home_Name">[ Abimael p ]</div>
          <div className="container_header">
        <ul className="header_layout">
          <li>
            <a href="#prev">Inicio</a>
          </li>
          <li>
            <a href="#Aboutme">Sobre Mi</a>
          </li>
          <li>
            <a href="#myservice">Back-End</a>
          </li>
          <li>
            <a href="#proyect">Front-End</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <div className="contact_div">
            <Contact />
        </div>
          </div>
        <button className="btn-modal" onClick={handleClikOpen}>
          <i className="bx bxs-objects-horizontal-right"></i>
        </button>
      </header>
      { isOpen && (<Modal />)}
    </>
  );
};

export default Header;
