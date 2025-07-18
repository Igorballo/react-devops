import React from "react";

const logos = [
  "[Logo1]", "[Logo2]", "[Logo3]", "[Logo4]", "[Logo5]", "[Logo6]", "[Logo7]", "[Logo8]", "[Logo9]", "[Logo10]", "[Logo11]", "[Logo12]"
];

const IntegrationsSection = () => {
  return (
    <section className="bg-gradient-to-r from-white to-gray-100 pt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Texte à gauche */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-blue-600">Intégrations</span> logicielles facile
          </h2>
          <p className="text-gray-600 font-medium mb-12">
            Connectez-vous, collaborez et automatisez grâce à la vaste bibliothèque d'intégrations de Dowonou. Notre plateforme s'intègre parfaitement aux logiciels les plus répandus, vous permettant de rationaliser vos flux de travail et d'optimiser votre productivité.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded transition">Découvrez nos intégrations dès aujourd'hui</button>
        </div>
        {/* Logos à droite */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/svg/INTEGRATION.svg" alt="integration" className="w-full h-full object-contain" />
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection; 