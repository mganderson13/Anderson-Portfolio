import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home.jsx";
import Projects from './components/Projects';
import Footer from "./components/Footer";
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
  <>
  <NavBar />
  <div id="mainBody">
  <Routes> 
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/resume" element={<Resume />} />
  </Routes>
  </div>
  <Footer />
  </>
  );
}

export default App;
