'use client';
// components/FavoritesSeries.tsx
import React, { useEffect, useState } from 'react';
import { TVShow } from '../entities/TVShow';
import SerieCard from '../pages/SerieCard';

const FavoritesSeries: React.FC = () => {
    const [FavoritesSeries, setFavorites] = useState<TVShow[]>([]);

    useEffect(() => {
        // Récupérer les favoris depuis localStorage
        const storedFavorites = JSON.parse(localStorage.getItem('favoritesSeries') || '[]');
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 text-white py-8 px-6">
            <h2 className="text-4xl font-bold mb-6 text-center">Vos Séries Favorites</h2>
            {FavoritesSeries.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {FavoritesSeries.map((serie) => (
                        <SerieCard key={serie.id} serie={serie} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <p className="text-lg text-gray-400">Aucune série n'a été ajoutée aux favoris.</p>
                </div>
            )}
        </div>
    );
};

export default FavoritesSeries;
