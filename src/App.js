import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="portifolio/" element={<Login />} />
        <Route exact path="portifolio/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
