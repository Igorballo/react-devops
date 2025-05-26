import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LoginPage from "./pages/Login";
import LandingModules from "./pages/LandingModules";
import Dowonou from "./pages/Dowonou";
import Ged from "./pages/Agbale";
import Erp from "./pages/Erp";
import Paie from "./pages/Paie";
import Crm from "./pages/Crm";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/modules" element={<LandingModules />} />
      <Route path="/dowonou" element={<Dowonou />} />
      <Route path="/agbale" element={<Ged />} />
      <Route path="/erp-log" element={<Erp />} />
      <Route path="/paie-log" element={<Paie />} />
      <Route path="/crm-log" element={<Crm />} />
    </Routes>
  </Router>
);

export default AppRouter; 