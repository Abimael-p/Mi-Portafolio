import ButtonPolygonIcon from "../icons/button_polygon_icon";
import ButtonPolygon2Icon from "../icons/button_polygon2_icon";
import NodeLogoIcon from "../icons/node_logo_icon";
import TailwindLogoIcon from "../icons/tailwind_logo_icon";
import FigmaLogoIcon from "../icons/figma_logo_icon";
import MongoLogoIcon from "../icons/mongo_logo_icon";
import CssLogoIcon from "../icons/css_logo_icon";
import GitHubLogoIcon from "../icons/github_logo_icon";
import ReactLogoIcon from "../icons/react_logo_icon";
import GitLogoIcon from "../icons/git_logo_icon";
import HtmlLogoIcon from "../icons/html_logo_icon";
import PostgreSQLLogoIcon from "../icons/postgresql_logo_icon";
import { useState } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const [pageNew, setPageNew] = useState("one");

  const setpageClik = (event) => {
    if (pageNew === "one") {
      setPageNew("two")
    } else {
      setPageNew("one")
    }
  }

  return (
    <>
      <section className="content_aboutme">
        <div className="section_page">
          <li id={pageNew === "one" ? "one_li" : ""}></li>
          <li id={pageNew === "two" ? "two_li" : ""}></li>
        </div>
        {pageNew === "one" && (
          <div>
            <h3 className="animation-aboutme">HOLA, SOY</h3>
            <h1 className="animation-aboutme">Abimael junior Pacheco Cardenas</h1>
            <h2 className="animation-aboutme">Desarrollador Full Stack</h2>
            <div className="animation-aboutme">
              <img src="https://i.ibb.co/KD5V771/Abi-Avatar.jpg" alt="abiAvatar" />
              <p>Un apasionado y dedicado a la informática y la programación. Comprometido con cada proyecto,
                busco constantemente oportunidades para mejorar mis habilidades y ofrecer soluciones
                tecnológicas eficientes. Estoy emocionado por contribuir en proyectos significativos y
                desafiantes, y siempre estoy dispuesto a colaborar para lograr resultados.</p>
            </div>
            <button className="button_cv">Descargar CV</button>
            <ButtonPolygonIcon onClick={setpageClik} className="button_two" />
          </div>
        )}
        {pageNew === "two" && (
          <div>
            <section className="content_skills">
              <h2 className="animation-skills">Habilidades</h2>
              <ul className="animation-skills">
                <li>
                  <NodeLogoIcon className="logo_icon" />
                  <p>Node.js</p>
                </li>
                <li>
                  <PostgreSQLLogoIcon className="logo_icon" />
                  <p>PostgreSQL</p>
                </li>
                <li>
                  <HtmlLogoIcon className="logo_icon" />
                  <p>HTML</p>
                </li>
                <li>
                  <GitLogoIcon className="logo_icon" />
                  <p>Git</p>
                </li>
                <li>
                  <ReactLogoIcon className="logo_icon" />
                  <p>React</p>
                </li>
                <li>
                  <GitHubLogoIcon className="logo_icon" />
                  <p>GitHub</p>
                </li>
                <li>
                  <CssLogoIcon className="logo_icon" />
                  <p>CSS</p>
                </li>
                <li>
                  <MongoLogoIcon className="logo_icon" />
                  <p>MongoDB</p>
                </li>
                <li>
                  <FigmaLogoIcon className="logo_icon" />
                  <p>Figma</p>
                </li>
                <li>
                  <TailwindLogoIcon className="logo_icon" />
                  <p>Tailwind</p>
                </li>
              </ul>
              <ButtonPolygon2Icon onClick={setpageClik} className="button_one" />
            </section>
          </div>
        )}
      </section>
    </>
  );
};

export default AboutMe;