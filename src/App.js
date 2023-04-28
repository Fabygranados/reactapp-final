import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      <footer> This project was coded by ✨Faby Granados and is {" "}
       <a href="https://github.com/Fabygranados/reactapp-final">
      Open-Sourced on GitHub
      </a>
      </footer>
     </div>
    </div>
  );
}


