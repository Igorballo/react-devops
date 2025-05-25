import React from "react";
import { Link } from "react-router-dom";

const modules = [
  {
    name: "AGBALE",
    description: "Gestion électronique des documents",
    logo: "/images/AGBALE.png",
    color: "text-green-700",
    to: "/agbale"
  },
  {
    name: "DOWONOU RH",
    description: "Gestion des ressources humaines",
    logo: "/images/DOWONOU-RH.png",
    color: "text-blue-700",
    to: "/rh"
  },
  {
    name: "ERP- LOG",
    description: "Gestion des inventaires",
    logo: "/images/ERP-LOG.png",
    color: "text-blue-400",
    to: "/erp"
  },
  {
    name: "PAIE-LOG",
    description: "Gestion de tout les elements de la paie",
    logo: "/images/PAIE-LOG.png",
    color: "text-blue-500 font-bold",
    to: "/paie"
  },
  {
    name: "CRM-LOG",
    description: "Gestion des relations clients",
    logo: "/images/CRM-LOG.png",
    color: "",
    to: "/crm"
  },
  {
    name: "Autre...",
    description: "",
    logo: null,
    color: "text-gray-400",
    to: "#"
  }
];

const LandingModules = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-2">
      <div className="rounded-3xl flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden lg:gap-8">
        {/* Image à gauche */}
        <div className="lg:w-5/12 w-full flex items-center justify-center bg-gray-100">
          <img src="/images/LOGIN.png" alt="Connexion" className="rounded-2xl object-cover w-full h-full" />
        </div>
        {/* Modules à droite */}
        <div className="lg:w-7/12 w-full flex flex-col items-center justify-center p-8">
          <div className="w-full ">
            <div className="flex items-center justify-center">
              <img src="/images/DOWONOU-SPACE.png" alt="Dowonou Logo" className="h-14" />
            </div>

            <div className="flex items-center justify-center my-8">
              <Link to="/login" className="text-gray-500 text-sm flex items-center hover:underline">
                <span className="mr-2">&larr;</span> Retour à la page de connexion
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {modules.map((mod, idx) => (
                <Link
                  to={mod.to}
                  key={idx}
                  className={`bg-white border rounded-lg p-5 flex flex-col items-center text-center shadow-sm hover:shadow-md transition ${mod.to === '#' ? 'pointer-events-none opacity-60' : 'cursor-pointer'}`}
                >
                  {mod.logo ? (
                    <img src={mod.logo} alt={mod.name} className="h-12 mb-2" />
                  ) : (
                    <span className={`text-lg mb-2 ${mod.color}`}>{mod.name}</span>
                  )}
                  {mod.description && <span className="text-xs font-semibold text-gray-700 mb-2">{mod.description}</span>}
                  <span className="text-gray-400 text-xl mt-auto">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingModules; 