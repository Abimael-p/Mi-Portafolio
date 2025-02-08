import Header from "./components/Header/Header";
import AboutMe from "./components/About Me/AboutMe";
import ModeLiteBlack from "./components/Mode Lite Black/ModeLiteBlack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import "./App.css";

function App() {
  const [modeLite, setModeLite] = useState(false)

  const buttonModeLite = () => {
    setModeLite(!modeLite);
    document.body.classList.toggle("lite");
    document.querySelector(".header_app").classList.toggle("lite");
    document.querySelector(".button").classList.toggle("lite");
    document.querySelector(".icon_selector").classList.toggle("lite");
  }

  return (
    <article>
      <Header />
      <ModeLiteBlack modeLite={modeLite} buttonMode={buttonModeLite} />
      <section>
        <AboutMe />
      </section>
      <section>
        <Projects />
      </section>
      <footer>
        <section>
          <Contact />
        </section>
      </footer>
    </article>
  );
}

export default App;
