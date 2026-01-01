import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import Skills from "./components/Skills.js";
import Educations from "./components/Educations.js";
import Portofolios from "./components/Portofolios.js";
import Experiences from "./components/Experiences.js";


function App() {
  return (
    <Router>
    <div>
        <Routes>
          <Route path="/" Component={Home}  />
          <Route path="/skills" Component={Skills} />
          <Route path="/education" Component={Educations} />
          <Route path="/experience" Component={Experiences} />
          <Route path="/portofolio" Component={Portofolios}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
