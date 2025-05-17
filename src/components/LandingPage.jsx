import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ModulesSection from "./ModulesSection";
import ProcessSection from "./ProcessSection";
import AboutSection from "./AboutSection";
import TestimonialsSection from "./TestimonialsSection";
import IntegrationsSection from "./IntegrationsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div id="accueil"><HeroSection /></div>
      <div id="modules"><ModulesSection /></div>
      <ProcessSection />
      <div id="apropos"><AboutSection /></div>
      <TestimonialsSection />
      <IntegrationsSection />
      <div id="contact"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default LandingPage; 