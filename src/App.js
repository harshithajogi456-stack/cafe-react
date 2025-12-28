import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Location from "./components/Location";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/location" element={<Location />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
