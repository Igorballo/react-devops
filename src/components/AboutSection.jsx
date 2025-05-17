import React from "react";

const avantages = [
  "Solution Tout-en-Un",
  "Personnalisation selon vos besoins",
  "Sécurité et Conformité",
  "Interface intuitive",
  "Précision et Fiabilité",
  "Gains de Temps et d'Efficacité",
  "Suivi et traçabilité des actions",
];

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Image à gauche */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="rounded-2xl overflow-hidden shadow-lg w-80 h-64 bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">[Image tablette ici]</span>
          </div>
        </div>
        {/* Texte à droite */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            A propos: <span className="text-blue-500">Downou</span>
          </h2>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Downou</span> est un logiciel de gestion des employés conçu pour moderniser et simplifier la gestion des ressources humaines. Depuis sa création, notre mission est de fournir aux entreprises une solution technologique innovante qui répond à leurs besoins spécifiques en matière de gestion des employés.
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Downou</span> a été développée par une équipe d'experts en RH et en technologie, avec pour objectif de simplifier les processus complexes et d'améliorer l'efficacité des départements RH. Notre logiciel offre une interface conviviale et intuitive, accessible à tous, même sans connaissances techniques approfondies.
          </p>
          <ul className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {avantages.map((a) => (
              <li key={a} className="flex items-center text-blue-700"><span className="mr-2 text-blue-400">•</span>{a}</li>
            ))}
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition">Contactez-nous</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 