import "./FortuneCookies.css";

const FortuneCookies = () => {
  return (
    <div id="proyect" className="container-proyect-fortune-cookies">
      <img src="https://i.ibb.co/myXprWY/Fortune-Cookies.png" alt="Fortune-Cookies" />
      <div className="container-content-fortune-cookies">
        <h3>Fortune Cookies</h3>
        <p>
        Fortune Cookies: app de React que combina una API de frases seleccionadas con una 
        interfaz visualmente cautivadora. Explora mensajes de fortuna mientras interactúas 
        con imágenes y estilos.
        </p>
        <div className="btn-fortune-cookies">
          <a href="https://fortune-cookies-day.netlify.app/">
            <button>Visitar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FortuneCookies;