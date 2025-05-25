import React from "react";

const modules = [
  {
    title: "DOWONOU RH",
    desc: "Solutions destinées à optimiser la gestion du personnel au sein d'une ou plusieurs entreprise",
    color: "border-blue-600",
    icon: "/images/DOWONOU_RH.svg",
  },
  {
    title: "DOWONOU GED",
    desc: "Gestion électronique des documents qui centralise, organise et sécurise tous vos fichiers.",
    color: "border-green-400",
    icon: "/images/DOWONOU_GED.png",
  },
  {
    title: "DOWONOU PAIE",
    desc: "Solution intuitive qui automatise le calcul des salaires. Une administration efficace et sécurisée.",
    color: "border-teal-500",
    icon: "/images/DOWONOU_PAIE.svg",
  },
  {
    title: "DOWONOU CRM",
    desc: "Solutions destinées à aider les entreprises à gérer leurs relations avec leurs clients actuels et potentiels.",
    color: "border-red-600",
    icon: "/images/DOWONOU_CRM.svg",
  },
  {
    title: "DOWONOU STOCK",
    desc: "Gestion électronique des documents qui centralise, organise et sécurise tous vos fichiers.",
    color: "border-blue-400",
    icon: "/images/DOWONOU_STOCK.svg",
  },
];

const ModulesSection = () => {
  return (
    <section className="bg-gray-50 py-16 pt-[360px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-5">
          Des modules <span className="text-blue-700">adaptés</span> à vos <span className="text-blue-700">besoins</span>
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-20">
          Découvrez comment Dowonou peut transformer la gestion de vos employés grâce à ses fonctionnalités innovantes et intuitives. Une personnalisation avancée, et un support client exceptionnel, notre logiciel vous offre une gestion intégrée et efficace.
        </p>
        <div className="flex flex-wrap gap-8 lg:gap-12 xl:gap-16 justify-items-center items-center justify-center">
          {modules.map((mod, idx) => (
            <div
              key={mod.title}
              className={`bg-white border-t-4 ${mod.color} rounded-xl shadow p-6 flex flex-col items-center w-full max-w-xs`}
            >
              {/* <div className="text-4xl mb-3"></div> */}
              <img src={mod.icon} alt={mod.title} className="w-12 h-12 mb-3" />
              <h3 className="font-bold text-lg mb-2 text-center">{mod.title}</h3>
              <p className="text-gray-500 text-center mb-4">{mod.desc}</p>
              <button className="text-gray-800 hover:underline flex items-center gap-1">Voir plus <span>→</span></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection; 