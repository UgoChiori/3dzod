import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

const App: React.FC = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
