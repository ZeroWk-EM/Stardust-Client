import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import { Route, Routes } from "react-router-dom";
import Character from "./page/Character";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App bg-dark">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/characters" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
