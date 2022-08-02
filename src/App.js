import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Browse from './Browse'
import './assets/Belwe-Bold.eot'
import './assets/Belwe-Bold.eot'
import './assets/Belwe-Bold.svg'
import './assets/Belwe-Bold.ttf'
import './assets/Belwe-Bold.woff'
import './assets/Belwe-Bold.woff2'
import Random from "./Random";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/browse" element={<Browse />}/>
          <Route path="/rand" element={<Random />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
