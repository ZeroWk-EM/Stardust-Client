import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

import Character from "./page/Character";



function App() {
  return (
    <div className="App bg-dark">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/characters" element={<Character />} />
        <Route index path="/characters" element={<Character />} />
        <Route index path="/characters" element={<Character />} />
        <Route index path="/characters" element={<Character />} />
        <Route index path="/characters" element={<Character />} />
        <Route index path="/characters" element={<Character />} />
        <Route index path="/characters" element={<Character />} />
        <Route index path="/characters" element={<Character />} />
        <Route index path="/characters" element={<Character />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
