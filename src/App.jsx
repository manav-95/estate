import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Redevelope from "./pages/Redevelope";
import Corporate from "./pages/Corporate";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/redevelope-with-us" element={<Redevelope />} />
          <Route path="/corporate-governance" element={<Corporate />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
