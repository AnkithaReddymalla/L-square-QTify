import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
import AlbumGrid from "./components/AlbumGrid/AlbumGrid";
import SongsSection from "./components/SongsSection/SongsSection";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route
  path="/"
  element={
    <>
      <Hero />
      <AlbumGrid
        title="Top Albums"
        apiUrl="https://qtify-backend.labs.crio.do/albums/top"
      />
      <AlbumGrid
        title="New Albums"
        apiUrl="https://qtify-backend.labs.crio.do/albums/new"
      />
      <SongsSection />
    </>
  }
/>
        <Route path="/search" element={<Search placeholder="Search songs..." />} />
        <Route path="/button" element={<Button text="Click Me" />} />
        <Route path="/logo" element={<Logo />} />      
      </Routes>
    </div>
  );
}

export default App;
