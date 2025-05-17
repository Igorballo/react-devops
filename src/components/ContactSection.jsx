import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-10 items-start">
        {/* Infos de contact */}
        <div className="bg-white rounded-2xl shadow p-8 w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-xl font-bold text-blue-700 mb-4">Informations de Contact</h3>
          <ul className="mb-6 text-gray-700 space-y-2">
            <li><span className="font-semibold">Téléphone :</span> +33745353669 / +22871092448</li>
            <li><span className="font-semibold">Adresse :</span> Lomé, Togo (travail à distance également)</li>
            <li><span className="font-semibold">Email :</span> contact@downou.com</li>
          </ul>
          <div className="mb-2 font-semibold text-gray-600">Réseaux sociaux</div>
          <div className="flex gap-3 text-2xl">
            <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">[IG]</span>
            <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">[LI]</span>
            <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">[FB]</span>
            <span className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center">[X]</span>
          </div>
        </div>
        {/* Formulaire de contact */}
        <form className="bg-white rounded-2xl shadow p-8 w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex gap-4">
            <input type="text" placeholder="Nom" className="flex-1 border border-gray-300 rounded px-4 py-2" />
            <input type="text" placeholder="Prénom" className="flex-1 border border-gray-300 rounded px-4 py-2" />
          </div>
          <input type="email" placeholder="Adresse mail" className="border border-gray-300 rounded px-4 py-2" />
          <input type="tel" placeholder="Numéro de téléphone" className="border border-gray-300 rounded px-4 py-2" />
          <textarea placeholder="Message" className="border border-gray-300 rounded px-4 py-2 min-h-[80px]" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition self-end">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection; 