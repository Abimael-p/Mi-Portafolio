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
      <header>
        <Header />
      </header>
      <section>
        <Presentation />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <MyServices />
      </section>
      <section>
        <Proyects />
      </section>
      <section>
        <FormContact />
      </section>
      <footer>
        <Footer />
      </footer>
    </article>
  );
}

export default App;
