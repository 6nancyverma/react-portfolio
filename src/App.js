import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExperienceProjects from "./pages/Experience_Projects";
import EducationContact from "./pages/Education_contact";
import Contact from "./pages/Contact";
import "./stylesheets/home.css";
import "./stylesheets/Header-Footer.css";
import "./stylesheets/Courosel.css";
import "./stylesheets/Experience-projects.css";
import "./stylesheets/Education_contact.css";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/ExperienceProjects"
            exact
            element={<ExperienceProjects />}
          />
          <Route
            path="/EducationContact"
            exact
            element={<EducationContact />}
          />
          <Route path="/Contact" exact element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
