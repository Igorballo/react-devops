import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-2">
      <div className="rounded-3xl flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">
        {/* Image à gauche */}
        <div className="lg:w-1/2 h-full">
          <img
            src="/images/RESET_PASSWORD.png"
            alt="Définir un mot de passe"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Définir un mot de passe</h2>
          <p className="text-gray-600 text-sm mb-6">
            Votre ancien mot de passe a été réinitialisé. Veuillez définir un nouveau mot de passe pour votre compte.
          </p>
          <form>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nouveau mot de passe <span className="text-red-500">*</span>
            </label>
            <div className="mb-4 relative">
              <input
                type={show ? "text" : "password"}
                required
                placeholder="779B9M6X@!H&$K_"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShow(s => !s)}
                tabIndex={-1}
              >
                {show ? (
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                   <circle cx="12" cy="12" r="3"/>
                 </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
                    <path d="m2 2 20 20"/>
                  </svg>
                )}
              </button>
            </div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmer le nouveau mot de passe <span className="text-red-500">*</span>
            </label>
            <div className="mb-6 relative">
              <input
                type={showConfirm ? "text" : "password"}
                required
                placeholder="779B9M6X@!H&$K_"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowConfirm(s => !s)}
                tabIndex={-1}
              >
                {showConfirm ? (
                  
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/>
                   <circle cx="12" cy="12" r="3"/>
                 </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/>
                    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/>
                    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/>
                    <path d="m2 2 20 20"/>
                  </svg>
                )}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded transition"
            >
              Définir le mot de passe
            </button>
          </form>
          <div className="mt-10 text-xs text-gray-400 text-center">
            © 2025 ALL RIGHTS RESERVED DOWONOU
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword; 