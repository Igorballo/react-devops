import React from "react";

const modules = [
  {
    title: "DOWNOU RH",
    desc: "Solutions destinées à optimiser la gestion du personnel au sein d'une ou plusieurs entreprise",
    color: "border-blue-400",
    icon: "[RH]",
  },
  {
    title: "DOWNOU GED",
    desc: "Gestion électronique des documents qui centralise, organise et sécurise tous vos fichiers.",
    color: "border-green-400",
    icon: "[GED]",
  },
  {
    title: "DOWNOU PAIE",
    desc: "Solution intuitive qui automatise le calcul des salaires. Une administration efficace et sécurisée.",
    color: "border-cyan-400",
    icon: "[PAIE]",
  },
  {
    title: "DOWNOU CRM",
    desc: "Solutions destinées à aider les entreprises à gérer leurs relations avec leurs clients actuels et potentiels.",
    color: "border-red-400",
    icon: "[CRM]",
  },
  {
    title: "DOWNOU STOCK",
    desc: "Gestion électronique des documents qui centralise, organise et sécurise tous vos fichiers.",
    color: "border-blue-300",
    icon: "[STOCK]",
  },
];

const ModulesSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Des modules <span className="text-blue-500">adaptés</span> à vos <span className="text-blue-400">besoins</span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-10">
          Découvrez comment Downou peut transformer la gestion de vos employés grâce à ses fonctionnalités innovantes et intuitives. Une personnalisation avancée, et un support client exceptionnel, notre logiciel vous offre une gestion intégrée et efficace.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {modules.map((mod, idx) => (
            <div
              key={mod.title}
              className={`bg-white border-t-4 ${mod.color} rounded-xl shadow p-6 flex flex-col items-center w-full max-w-xs`}
            >
              <div className="text-4xl mb-3">{mod.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-center">{mod.title}</h3>
              <p className="text-gray-500 text-center mb-4">{mod.desc}</p>
              <button className="text-blue-500 hover:underline flex items-center gap-1">Voir plus <span>→</span></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection; 