
import './App.css';

import { Routes, Route } from "react-router-dom";


import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
    </Routes>
  );
}

export default App;