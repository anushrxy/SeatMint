import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import UspSection from "./Components/UspSection";
import { app } from "./assets/Firebaseconfig";


function App() {

  
  
  return (
    <>
      <Navbar />
      <Hero />
      <UspSection />
    </>
  );
}

export default App;
