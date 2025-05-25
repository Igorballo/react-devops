import React from "react";

const features = [
  "Gestion des employés (profil, documents, historique, poste)",
  "Gestion des congés et absences",
  "Suivi des documents administratifs",
  "Suivi des objectifs & évaluation de performance",
  "Recrutement et intégration",
  "Communication interne et notifications",
  "Tableaux de bord et statistiques RH",
];

const RhFeatures = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center py-16 px-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 bg-transparent">
        {/* Image à gauche */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-full max-w-md">
            <img src="/images/KEY-FEATURES.png" alt="Fonctionnalités RH" className="rounded-xl w-full object-cover" />
            {/* Ajout d'éventuels overlays ou badges ici si besoin */}
          </div>
        </div>
        {/* Fonctionnalités à droite */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Fonctionnalités clés</h2>
          <ul className="space-y-4">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700 text-base md:text-lg">
                <span className="mt-1 w-3 h-3 rounded bg-blue-600 inline-block"></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RhFeatures; 