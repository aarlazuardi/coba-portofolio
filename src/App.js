import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import WhyHireMe from "./components/WhyHireMe";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import EmailForm from "./components/EmailForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <WhyHireMe />
      <Testimonials />
      <Projects />
      <Connect />
      <EmailForm />
      <Footer />
    </div>
  );
}

export default App;
