// import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education_contact';
import Contact from './pages/Contact';
import './stylesheets/home.css'
import './stylesheets/Header-Footer.css'
import './stylesheets/Courosel.css'
import  './stylesheets/Projects.css'
import  './stylesheets/Education_contact.css'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles// ..
AOS.init();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<Home />}/>
      <Route path='/Projects' exact element={<Projects />}/>
      <Route path='/Education' exact element={<Education />}/>
      <Route path='/Contact' exact element={<Contact />}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
