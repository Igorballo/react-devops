import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${scrolled ? "bg-white shadow text-gray-800" : "bg-transparent shadow-none text-white"} fixed w-full top-0 left-0 transition-all duration-300`} style={{ zIndex: 1000 }}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold ${scrolled ? "text-white" : "text-white"}`}>D</div>
          <span className={`font-bold text-lg ${scrolled ? "text-gray-800" : "text-white"}`}>Downou</span>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#accueil" className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 font-medium text-sm`}>Accueil</a>
          <a href="#modules" className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 font-medium text-sm`}>Modules</a>
          <a href="#apropos" className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 font-medium text-sm`}>À propos</a>
          <a href="#contact" className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 font-medium text-sm`}>Contact</a>
        </div>
        {/* Bouton Se connecter */}
        <div className="hidden md:block">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition text-sm">Se connecter</button>
        </div>
        {/* Hamburger */}
        <button className="md:hidden flex items-center" onClick={() => setOpen(!open)}>
          <span className="material-icons text-3xl">{open ? 'close' : 'menu'}</span>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white shadow px-4 pb-4">
          <a href="#accueil" className="block py-2 text-gray-700 hover:text-blue-500 font-medium">Accueil</a>
          <a href="#modules" className="block py-2 text-gray-700 hover:text-blue-500 font-medium">Modules</a>
          <a href="#apropos" className="block py-2 text-gray-700 hover:text-blue-500 font-medium">À propos</a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-500 font-medium">Contact</a>
          <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition text-sm">Se connecter</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 