import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import LandingModules from "./pages/LandingModules";
import RhPage from "./pages/RhPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/modules" element={<LandingModules />} />
      <Route path="/rh" element={<RhPage />} />
    </Routes>
  </Router>
);

export default AppRouter; 