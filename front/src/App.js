//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characs from './components/Characs';
import OneCharac from './pages/OneCharac'

function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Characs />} />
              <Route path="/:firstName" element={<OneCharac />} />
            </Routes>
          </BrowserRouter>
  );
}

export default App;
