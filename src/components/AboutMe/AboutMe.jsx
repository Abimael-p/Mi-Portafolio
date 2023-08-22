import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="Aboutme" className="container-about-me">
      <div className="image-url-me">
        <img src="https://i.ibb.co/G5DP8gG/1686937991254.png" alt="AbimaelP" />
      </div>
      <div className="about-me-content">
        <h2 className="title-about">SOBRE MI</h2>
        <h2>
          ¡Hola! Soy <b>Abimael Junior Pacheco Cárdenas</b>
        </h2>
        <h4>Desarrollador Back-End</h4>
        <p>
          {" "}
          Un apasionado y dedicado a la informática y la programación.
          Comprometido con cada proyecto, busco constantemente oportunidades
          para mejorar mis habilidades y ofrecer soluciones tecnológicas
          eficientes.
        </p>
        <p>
          Estoy emocionado por contribuir en proyectos significativos y
          desafiantes, y siempre estoy dispuesto a colaborar para lograr
          resultados. ¡Gracias por considerar mi perfil y espero tener la
          oportunidad de trabajar juntos en el futuro!
        </p>
        <div className="btn-downloand-CV">
            <a href="https://drive.google.com/file/d/18Ft22vji8RJUwZ96oMkGhVU6-T84sgPb/view?usp=sharing">
                <button> Descargar CV </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
