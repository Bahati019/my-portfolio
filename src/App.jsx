import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
    <Navbar />
    <section id="home"><Home /></section>
    <section id="skills"><Skills /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
    <Footer />
    </>
  );
}

export default App;
