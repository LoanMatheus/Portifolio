import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const location = useLocation().pathname;
  return (
    <div className="App">
      {location === '/' ? ('') : <Header />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {location === '/' ? ('') : <Footer />}

    </div>
  );
}

export default App;
