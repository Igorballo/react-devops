import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-6xl mx-auto">
        <div className="px-4 flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo et description */}
          <div className="flex-1 mb-8 md:mb-0 w-full">
            <div className="flex items-start justify-start gap-2 mb-3 w-full">
              <img src="/svg/DOWONOU_FOOTER.svg" alt="logo" className="h-10" />
            </div>
            <p className="text-gray-500 mb-4">Une solution complète et intuitive qui centralise toutes les fonctions RH en un seul endroit. Partenaire pour la gestion des entreprises.</p>
            <div className="flex gap-3 text-2xl">
              <img src="/svg/RESEAUX_SOCIAUX.svg" alt="facebook" className="h-6" />
            </div>
          </div>
          {/* Menu rapide */}
          <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center justify-center text-center">
            <h4 className="font-bold text-gray-700 mb-2">Menu rapide</h4>
            <ul className="text-gray-500 space-y-3">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'border-b-2 border-blue-400 text-blue-500' : 'hover:text-blue-500'}`
                  }
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/modules" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'border-b-2 border-blue-400 text-blue-500' : 'hover:text-blue-500'}`
                  }
                >
                  Modules
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'border-b-2 border-blue-400 text-blue-500' : 'hover:text-blue-500'}`
                  }
                >
                  À propos
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `block py-1 ${isActive ? 'border-b-2 border-blue-400 text-blue-500' : 'hover:text-blue-500'}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="flex-1">
            <h4 className="font-bold text-gray-700 mb-4">Contact</h4>
            <ul className="text-gray-500 space-y-4">
              <li className="flex items-center gap-3 text-sm"><img src="/svg/TELEPHONE.svg" alt="telephone" className="w-5 h-5" />  +33745353669 / +22871092448</li>
              <li className="flex items-center gap-3 text-sm"><img src="/svg/LOCATION.svg" alt="location" className="w-5 h-5" /> Nous sommes à Lomé au Togo et nous travaillons à distance également.</li>
              <li className="flex items-center gap-3 text-sm"><img src="/svg/MAIL.svg" alt="mail" className="w-5 h-5" /> contact@dowonou.com</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row w-full items-center justify-between font-semibold border-t-2 border-gray-200 border-dashed text-gray-800 text-sm pt-5 mt-8">
          <p>Copyright 2025 All Rights Reserved Dowonou </p> <p>By AF Corporations</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 