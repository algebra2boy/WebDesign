import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; // activate and direct to different link

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact />
      </Routes>
    </Router>
    </>

  );
}

export default App;
