import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home.jsx";
import Projects from './components/Projects';

function App() {
  return (
  <>
  <NavBar />
  <div id="mainBody">
  <Routes> 
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
  </div>
  </>
  );
}

export default App;
