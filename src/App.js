import React from "react";
import  './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar"
import Main from "./Main"
import Metaverse from "./Metaverse"



export default function App() {
    return (  
     <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/metaverse" element={<Metaverse/>} />
      </Routes>
     </Router>
    )
}

