import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo et description */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold">D</div>
            <span className="font-bold text-xl text-gray-800">Downou</span>
          </div>
          <p className="text-gray-500 mb-4">Une solution complète et intuitive qui centralise toutes les fonctions RH en un seul endroit. Partenaire pour la gestion des entreprises.</p>
          <div className="flex gap-3 text-2xl">
            <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">[IG]</span>
            <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">[LI]</span>
            <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">[FB]</span>
            <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">[X]</span>
          </div>
        </div>
        {/* Menu rapide */}
        <div className="flex-1 mb-8 md:mb-0">
          <h4 className="font-bold text-gray-700 mb-2">Menu rapide</h4>
          <ul className="text-gray-500 space-y-1">
            <li>Accueil</li>
            <li>Modules</li>
            <li>À propos</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Contact */}
        <div className="flex-1">
          <h4 className="font-bold text-gray-700 mb-2">Contact</h4>
          <ul className="text-gray-500 space-y-1">
            <li>+33745353669 / +22871092448</li>
            <li>Nous sommes à Lomé au Togo et nous travaillons à distance également.</li>
            <li>contact@downou.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8">
        Copyright 2025 All Rights Reserved Downou &nbsp; | &nbsp; By AF Corporations
      </div>
    </footer>
  );
};

export default Footer; 