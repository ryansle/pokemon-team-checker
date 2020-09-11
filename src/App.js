import React from 'react';

// Components
import Navbar from "./components/Navbar";
import Router from "./Router";

// Utilities
import './App.css';
import { ProvideAuth } from "./utils/use-auth";

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Navbar />
        <Router />
      </div>
    </ProvideAuth>
  );
}

export default App;