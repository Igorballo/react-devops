import React, { useState, useEffect } from "react";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";

const modules = [
  { name: "AGBALE", to: "/agbale" },
  { name: "DOWONOU RH", to: "/dowonou" },
  { name: "ERP- LOG", to: "/erp-log" },
  { name: "PAIE-LOG", to: "/paie-log" },
  { name: "CRM-LOG", to: "/crm-log" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isSolutionsActive = modules.some(module => location.pathname === module.to);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le dropdown si on clique ailleurs
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest("#solutions-dropdown")) setDropdown(false);
    };
    if (dropdown) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [dropdown]);

  return (
    <nav className={`${scrolled ? "bg-white shadow text-gray-800" : "bg-transparent shadow-none text-white"} fixed w-full top-0 left-0 transition-all duration-300`} style={{ zIndex: 1000 }}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <img src="/svg/DOWONOU_WHITE.svg" alt="logo" className="w-full h-8" /> */}
          <div className={`w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold ${scrolled ? "text-white" : "text-white"}`}>D</div>
          <span className={`font-bold text-lg ${scrolled ? "text-gray-800" : "text-white"}`}>Dowonou</span>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium text-sm ${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 ${isActive ? 'border-b-[3px] border-blue-400 pb-0.5' : ''}`
            }
          >
            Accueil
          </NavLink>
          {/* Dropdown Solutions */}
          <div className="relative" id="solutions-dropdown">
            <button
              onClick={() => setDropdown((d) => !d)}
              className={`flex items-center gap-1 ${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 font-medium text-sm focus:outline-none ${isSolutionsActive ? 'border-b-[3px] border-blue-400 pb-0.5' : ''}`}
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform ${dropdown ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50 border">
                {modules.map((mod, idx) => (
                  <Link
                    key={mod.name}
                    to={mod.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm transition"
                    onClick={() => setDropdown(false)}
                  >
                    {mod.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a href="#apropos" className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 font-medium text-sm`}>À propos</a>
          <a href="#contact" className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 font-medium text-sm`}>Contact</a>
          {/* <button onClick={() => navigate("/about")} className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 font-medium text-sm`}>À propos</button>
          <button onClick={() => navigate("/contact")} className={`${scrolled ? "text-gray-700" : "text-gray-200"} hover:text-blue-500 font-medium text-sm`}>Contact</button> */}
        </div>
        {/* Bouton Se connecter */}
        <div className="hidden md:block">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition text-sm">Se connecter</Link>
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
          {/* Dropdown Solutions pour mobile */}
          <div className="block py-2">
            <button
              onClick={() => setDropdown((d) => !d)}
              className="flex items-center gap-1 text-gray-700 hover:text-blue-500 font-medium text-sm focus:outline-none"
            >
              Solutions
              <svg className={`w-4 h-4 transition-transform ${dropdown ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdown && (
              <div className="mt-2 w-full bg-white shadow-lg rounded-lg py-2 border">
                {modules.map((mod, idx) => (
                  <Link
                    key={mod.name}
                    to={mod.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm transition"
                    onClick={() => setDropdown(false)}
                  >
                    {mod.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a href="#apropos" className="block py-2 text-gray-700 hover:text-blue-500 font-medium">À propos</a>
          <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-500 font-medium">Contact</a>
          <Link to="/login" className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition text-sm flex items-center justify-center">Se connecter</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 