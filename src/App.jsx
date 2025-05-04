import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/Scroll-to-Top";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/:id" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:id" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
