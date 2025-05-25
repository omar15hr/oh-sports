'use client';

import { useState, useEffect } from "react";
import { UserIcon, HeartIcon, CartIcon, SearchIcon, BaselineIcon } from "../Icons";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const navMenu = [
    { name: "Inicio", to: "/" },
    { name: "Hombres", to: "/gender/hombres" },
    { name: "Mujeres", to: "/gender/mujeres" },
    { name: "Niños", to: "/gender/niños" },
    { name: "Ofertas", to: "#" },
    { name: "Contacto", to: "#" },
  ];

  const navIcons = [
    { id: 1, icon: (<UserIcon className="text-gray-600 transition-transform duration-200 hover:scale-110" />) },
    { id: 2, icon: (<HeartIcon className="text-gray-600 transition-transform duration-200 hover:scale-110" />) },
    { id: 3, icon: (<CartIcon className="text-gray-600 transition-transform duration-200 hover:scale-110" />) },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-4xl font-bold text-black font-lunabar mt-2"
          >
            OH
          </Link>
        </div>

        <nav className="hidden md:flex space-x-6">
          {navMenu.map(({ name, to }) => (
            <Link
              key={name}
              href={to}
              className="text-gray-700 hover:text-blue-600"
            >
              {name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div
            className={`relative transition-all duration-300 ${
              searchFocused ? "w-64" : "w-40"
            }`}
          >
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full py-2 pl-10 pr-4 text-sm border-none rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="hidden md:inline-flex p-2 rounded ">
            {navIcons.map(({ id, icon }) => (
              <span key={id} className="cursor-pointer mx-2">
                {icon}
              </span>
            ))}
          </button>

          <button
            className="md:hidden p-2 rounded cursor-pointer hover:text-gray-600 "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <BaselineIcon />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gradient-to-t via-white from-white  shadow-md">
          <div className="flex flex-col items-center py-4 space-y-2">
            {navMenu.map(({ name, to }) => (
              <Link
                key={name}
                href={to}
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <div className="flex space-x-4 mt-2">
              <button className="flex p-2 rounded cursor-pointer">
                {navIcons.map(({ id, icon }) => (
                  <span key={id} className="mx-2">
                    {icon}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}