import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Un écosystème <span className="text-blue-400">RH à 360°</span>, pensé pour vos besoins d'entreprise.
        </h1>
        <p className="mb-6 text-lg md:text-xl text-gray-200">
          Bienvenue sur <span className="font-semibold">Downou</span>, votre partenaire incontournable pour une gestion des employés plus efficace et moderne. <span className="font-semibold">Downou</span>, une solution complète et intuitive qui centralise toutes les fonctions RH en un seul outil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition">Contactez-nous</button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded transition border border-gray-600">Demander de démo</button>
        </div>
        <div className="w-full flex justify-center">
          {/* Placeholder pour l'image du dashboard */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-3xl h-72 flex items-center justify-center">
            <span className="text-gray-400">[Image du dashboard ici]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 