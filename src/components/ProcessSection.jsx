import React from "react";

const steps = [
  {
    icon: "🔍",
    title: "Recueil de besoin",
    desc: "Analyse de vos besoins RH pour une solution sur-mesure.",
  },
  {
    icon: "📒",
    title: "Customisation",
    desc: "Personnalisation de la plateforme selon vos attentes.",
  },
  {
    icon: "🚀",
    title: "Déploiement",
    desc: "Mise en place rapide et accompagnement au lancement.",
  },
  {
    icon: "🎓",
    title: "Formation & maintenance",
    desc: "Formation de vos équipes et support continu.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-blue-900 py-16 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 uppercase tracking-wide">Le processus Downou</h2>
        <p className="text-center text-blue-200 mb-10 max-w-2xl mx-auto">
          Notre approche repose sur quatre étapes clés : recueil de besoins, customisation, déploiement et formation avec maintenance, pour vous offrir une solution parfaitement adaptée et opérationnelle.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {steps.map((step, idx) => (
            <div key={step.title} className="flex flex-col items-center text-center flex-1">
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-blue-200 text-sm mb-2">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block h-1 w-12 bg-blue-400 mx-auto my-4 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 