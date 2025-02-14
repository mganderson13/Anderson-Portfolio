import './App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home.jsx";

function App() {
  return (
  <>
  <NavBar />
  <div id="mainBody">
  <Routes> 
    <Route path="/" element={<Home />} />
  </Routes>
  </div>
  </>
  );
}

export default App;
