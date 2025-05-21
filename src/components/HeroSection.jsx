import React from "react";

const HeroSection = () => {
  return (
    <section className="relative text-white h-[100vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/herosection_1.png')" }}>
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative z-20 max-w-5xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Un écosystème <span className="text-blue-400">RH à 360°</span>, pensé pour vos besoins d'entreprise.
        </h1>
        <p className="mb-16 text-lg text-gray-200">
          Bienvenue sur <span className="font-semibold">Downou</span>, votre partenaire incontournable pour une gestion des employés plus efficace et moderne. <span className="font-semibold">Downou</span>, une solution complète et intuitive qui centralise toutes les fonctions RH en un seul outil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded transition">Contactez-nous</button>
          <button className="hover:bg-gray-800/40 text-white px-6 py-2 rounded transition border border-white">Demander de démo</button>
        </div>
        
      </div>
      {/* Dashboard mockup débordant */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-full max-w-5xl" style={{ bottom: '-40%' }}>
        <div className="overflow-hidden w-full h-[450px] flex items-center justify-center">
          <img src="/images/dash_mockup.png" alt="dashboard" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 