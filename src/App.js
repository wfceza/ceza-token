import React from "react";
import  './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar"
import Main from "./Main"



export default function App() {
    return (  
     <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
     </Router>
    )
}

