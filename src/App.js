import React from 'react';

// Components
import Navbar from "./components/Navbar";
import Router from "./Router";

// Utilities
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
