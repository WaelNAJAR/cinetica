// components/Sidebar.tsx
import React, { useState } from 'react';
import { MenuIcon } from 'lucide-react';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Bouton pour ouvrir/fermer le menu */}
            <button onClick={toggleSidebar} className="p-2">
                <MenuIcon className="h-8 w-8 text-gray-800" /> {/* Icône de menu */}
            </button>

            {/* Sidebar */}
            <div className={`transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 bg-gray-800 text-white w-64 p-4`}>
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                <ul className="space-y-2">
                    <li>
                        <h3 className="font-semibold">Movies</h3>
                        <ul className="ml-4 space-y-1">
                            <li>Popular</li>
                            <li>Now Playing</li>
                            <li>Top Rated</li>
                        </ul>
                    </li>
                    <li>
                        <h3 className="font-semibold">Series</h3>
                        <ul className="ml-4 space-y-1">
                            <li>Popular</li>
                            <li>On The Air</li>
                            <li>Top Rated</li>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* Overlay si le menu est ouvert */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
