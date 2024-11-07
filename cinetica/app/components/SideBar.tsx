// components/Sidebar.tsx
"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react"; // Exemple d'icône

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Bouton pour ouvrir/fermer le menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-gray-800 text-white rounded-md focus:outline-none"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 transform bg-white shadow-lg w-64 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <h2 className="text-2xl font-semibold p-4">Menu</h2>
        <ul className="space-y-4 pl-4">
          <li className="cursor-pointer">Now Playing</li>
          <li className="cursor-pointer">Popular</li>
          <li className="cursor-pointer">Top Rated</li>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
