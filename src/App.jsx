import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import MyServices from "./components/MyServices/MyServices";
import "./App.css";
import Proyects from "./components/proyects/Proyects";
import FormContact from "./components/FormContact/FormContact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <article>
      <div className="progress-app"></div>
      <header>
        <Header />
      </header>
      <section className="briefcase-about-me">
        <Presentation />
      </section>
      <section className="briefcase-about-me">
        <AboutMe />
      </section>
      <section className="briefcase-about-me">
        <Skills />
      </section>
      <section className="briefcase-about-me">
        <MyServices />
      </section>
      <section className="proyect-reveal">
        <Proyects />
      </section>
      <section className="briefcase-about-me">
        <FormContact />
      </section>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}

export default App;
