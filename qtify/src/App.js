import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
import "./App.css";
import { Routes, Route } from "react-router-dom";   // ✅ import Routes/Route

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />              {/* Home route */}
        <Route path="/search" element={<Search placeholder="Search songs..." />} />
        <Route path="/button" element={<Button text="Click Me" />} />
        <Route path="/logo" element={<Logo />} />
      </Routes>
    </div>
  );
}

export default App;
