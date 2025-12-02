import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import JoinUs from "./Pages/JoinUs";
import Login from "./pages/Login";
import SignupPage from "./pages/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
