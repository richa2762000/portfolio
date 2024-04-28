import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-indigo-950">
      <nav className="flex justify-between items-center p-4 sm:p-6">
        <NavLink to="/">
          <h1 className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg text-transparent bg-clip-text text-2xl font-sofia">My Portfolio</h1>
        </NavLink>
<div>
        <button className="block  sm:hidden text-white" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <ul className={`hidden sm:flex space-x-4 text-white ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <li>
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:underline">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={() => setMobileMenuOpen(false)} className="hover:underline">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:underline">
              Contact
            </NavLink>
          </li>
        </ul>

        {isMobileMenuOpen && (
          <div className="sm:hidden text-white">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              About
            </NavLink>
            <NavLink to="/skills" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Skills
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2">
              Contact
            </NavLink>
          </div>
        )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
