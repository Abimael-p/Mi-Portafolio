import LogoIcon from "../icons/logo_icon";
import "./Header.css";

const Header = () => {

  return (
    <header className="header_app">
      <div className="content_logo">
        <LogoIcon className="logo" />
      </div>
      <div className="list_content">
        <ul>
          <li>Sobre Mi</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
        <div>
          <button><p>resumen</p></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
