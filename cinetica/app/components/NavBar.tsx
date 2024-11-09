import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
    onSearch: (query: string) => void;
  }
export default function Navbar({ onSearch }: NavbarProps) {
    const [query, setQuery] = useState("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        onSearch(e.target.value); // Appelle la fonction de recherche de HomePage avec la nouvelle requête
      };

  return (
<nav className="bg-gray-700 text-white p-4 shadow-md fixed w-full top-0 z-50">
  <div className="container mx-auto flex justify-between items-center">
    <Link href="/"> {/* Lien vers la page d'accueil */}
      <h1 className="text-lg font-bold">Cinetica</h1>
    </Link>
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search..."
      className="bg-white text-gray-900 p-2 rounded-md ml-4 w-1/3" // Ajuste la largeur ici
    />
  </div>
</nav>

  );
}
