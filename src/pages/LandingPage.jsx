import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ModulesSection from "../components/ModulesSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import IntegrationsSection from "../components/IntegrationsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <HeroSection />
      <ModulesSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage; 