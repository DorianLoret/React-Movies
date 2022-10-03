import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LikePage from "./pages/LikePage";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />}></Route>
        <Route path="/coups-de-coeur" element={<LikePage />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
