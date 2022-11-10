import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; // activate and direct to different link
import './App.css';
import Home from "./components/pages/home";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Home />
      <Routes>
        <Route path = '/' exact component={Home} />
      </Routes>
      <p>Hello, world</p>
      <p>lorem</p>
      <p>lorem</p>
      <p>lorem</p>
    </Router>
    </>

  );
}

export default App;
