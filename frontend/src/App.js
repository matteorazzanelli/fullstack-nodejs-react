
import './App.css';

import { Routes, Route } from "react-router-dom";


import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/home" element={<Home/>} />
    </Routes>
  );
}

export default App;