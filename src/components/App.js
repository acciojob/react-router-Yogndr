
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navigation from "./Navigation";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navigation/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>


        </Routes>
        
    </div>
    </BrowserRouter>
  )
}

export default App
