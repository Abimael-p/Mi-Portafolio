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
            <a href="https://drive.google.com/filehttps://doc-00-a0-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/9bfbnhj4n9g23mkdalfm6qudkmqtip2n/jnpdqvc078tur050ejmc5kfcjfl2edqt/1697232000000/3/102058319505950124575/APznzabzbTlEGMHHlncM4qNfaG8emmeEnO8zQ2NLVxx0ybLR9UQ66-xbmRVBNKHbiWpqW6owj8NroBRBiZenZO5dxtO2jz966ttAcGA1bOEqu_3IuuMib2YU202E9GXbja_jnzwlYGWKyT4GRQyJRIWdS20Rvqjz5NQvSBFbksuRsARlJaWl-FuAkVZCoqokXyfSVkd4UwBXT9lJcqCAr9izCMD_Q1JYfiMuz-XKwhw4FTlNEcctk9nuigPIDPp0CY4kL2PcLRzfTiY7vFhjuaOXKkT8erQdIBnFKUk-mHCIpbojzoDxltd0N_yLN4Vpkrdbah3LJBoJELiK76jrtXvJNIorq8Ah9QWNIrJG3H_vuHGH0jn72gjevcNdJFYl4XfH4tm1pDUVkzo5QMxZLrXGkQ_S-xipog0Q0c3nspPSyHijQUpmzis=?authuser=0&nonce=cv9gov4llv7vu&user=102058319505950124575&hash=77r2g9ch52j6jkaehjesved587rt7g4g/d/18Ft22vji8RJUwZ96oMkGhVU6-T84sgPb/view?usp=sharing">
                <button> Descargar CV </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
