import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import React from "./pages/React";
import Next from "./pages/Next";
import Pypi from "./pages/Pypi";
import API from "./pages/API";
import Others from "./pages/Others";

export default function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="react" element={<React />} />
        <Route path="next" element={<Next />} />
        <Route path="api" element={<API />} />
        <Route path="pypi" element={<Pypi />} />
        <Route path="other" element={<Others />} />
      </Routes>
    </BrowserRouter>
  );
}