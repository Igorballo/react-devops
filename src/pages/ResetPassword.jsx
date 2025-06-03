import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-2">
      <div className="rounded-3xl flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">
        {/* Image à gauche */}
        <div className="lg:w-1/2 h-full">
          <img
            src="/images/RESET_PASSWORD.png"
            alt="Mot de passe oublié"
            className="rounded-2xl object-contain w-full h-full"
          />
        </div>
        {/* Formulaire à droite */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center px-20">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <img src="/svg/DOWONOU_RH.svg" alt="Logo" className="h-12" />
            <div>
              <span className="font-bold text-xl text-gray-900">DOWONOU RH</span>
              <div className="text-xs text-gray-500 -mt-1">OPTIMISEZ ET SIMPLIFIEZ VOTRE GESTION</div>
            </div>
          </div>
          <Link to="/login" className="text-gray-500 text-sm flex items-center hover:underline mb-4">
            <span className="mr-2">&larr;</span> Retour à la connexion
          </Link>
          <button onClick={() => navigate("/reset-password")} className="text-left text-xl font-bold text-gray-900 mb-2">Mot de passe oublié&nbsp;?</button>
          <p className="text-gray-600 text-sm mb-6">
            Ne vous inquiétez pas, cela nous arrive à tous. Saisissez votre adresse e-mail ci-dessous pour récupérer votre mot de passe.
          </p>
          <form>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adresse mail <span className="text-red-500">*</span>
            </label>
            <div className="mb-4">
              <input
                type="email"
                required
                placeholder="example@mail.com"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button 
              onClick={() => navigate("/verify-code")}
              className="mt-4 w-full bg-blue-700 hover:bg-blue-800 text-white font-normal py-2 rounded transition"
            >
              Envoyez
            </button>
          </form>
          <div className="mt-16 text-xs text-gray-400 text-center">
            © 2025 ALL RIGHTS RESERVED DOWONOU
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword; 