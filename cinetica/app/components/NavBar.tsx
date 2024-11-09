import Link from 'next/link';

export default function Navbar() {
  
  return (
    <nav className="bg-gray-700 text-white p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">   {/*a ajusté le link*/ }
          <h1 className="text-lg font-bold">Cinetica</h1>
        </Link>
    
      </div>
    </nav>
  );
}
