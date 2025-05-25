import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter la logique d'authentification
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="hidden lg:flex justify-end mb-4 w-full pr-20">
        <span onClick={() => navigate("/")} className="hover:cursor-pointer text-gray-500 text-sm hover:text-blue-600 transition">Site Dowonou <span className="inline-block">↑</span></span>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-5xl overflow-hidden md:px-4 lg:px-0 md:gap-6 lg:gap-12">
        {/* Image à gauche */}
        <div className="md:w-1/2 w-full h-80 md:h-auto flex items-center justify-center">
          <img
            src="/images/LOGIN.png"
            alt="login visual"
            className="object-cover w-full  h-full md:rounded-3xl"
          />
        </div>
        {/* Formulaire à droite */}
        <div className="md:w-1/2 w-full flex flex-col justify-center justify-between p-8 md:pb-6 md:p-12">
        <div className="lg:hidden flex justify-end mb-8 w-full">
        <span onClick={() => navigate("/")} className="hover:cursor-pointer text-gray-500 text-sm hover:text-blue-600 transition">Site Dowonou <span className="inline-block">↑</span></span>
      </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              DOWONOU <span className="text-blue-600">SPACE</span>
            </h1>
            <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider">UNE NOUVELLE VISION DE LA GESTION D'ENTREPRISE</div>
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">Content de vous revoir <span>👋</span></h2>
            <p className="text-gray-500 mb-6">Connectez-vous pour accéder à votre compte</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Adresse mail <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <img src="/svg/EMAIL_INPUT.svg" className="w-5 h-4" alt="mail" />
                  </span>
                  <input
                    type="email"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="example@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Mot de passe <span className="text-red-500">*</span></label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <img src="/svg/PASSWORD_INPUT.svg" className="w-5 h-4" alt="mail" />
                  </span>
                  <input
                    type="password"
                    required
                    minLength={8}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="au moins 8 caractères"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-end mt-1">
                  <a href="#" className="text-xs text-blue-600 hover:underline">Mot de passe oublié ?</a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition mt-2"
              >
                Connexion
              </button>
            </form>
          </div>
          <div className="text-xs text-gray-400 text-center mt-8">© 2025 ALL RIGHTS RESERVED DOWONOU</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 