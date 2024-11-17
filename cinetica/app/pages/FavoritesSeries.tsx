'use client';
// components/FavoritesSeries.tsx
import React, { useEffect, useState } from 'react';
import { TVShow } from '../entities/TVShow';
import SerieCard from './SerieCard';
interface FavoritesSeriesProps {
    searchQuery: string;
    onSerieClick: (serie: TVShow) => void; 
}
const FavoritesSeries: React.FC<FavoritesSeriesProps> = ({ searchQuery, onSerieClick }) => {
    const [FavoritesSeries, setFavorites] = useState<TVShow[]>([]);

useEffect(() => {
    // Récupérer les favoris depuis localStorage
    const storedFavorites = JSON.parse(localStorage.getItem('favoritesSeries') || '[]');

    // Appliquer un filtre si `searchQuery` est défini
    if (searchQuery) {
        const filteredFavorites = storedFavorites.filter((serie:TVShow) =>
            serie.name.toLowerCase().includes(searchQuery.toLowerCase()) // Comparaison insensible à la casse
        );
        setFavorites(filteredFavorites);
    } else {
        setFavorites(storedFavorites); // Si pas de `searchQuery`, afficher tous les favoris
    }
}, [searchQuery]); // Déclencher l'effet à chaque changement de `searchQuery`


    return (
        <div className="min-h-screen  text-white py-8 px-6">
            <h2 className="text-4xl font-bold mb-6 text-center">Vos Séries Favorites</h2>
            {FavoritesSeries.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {FavoritesSeries.map((serie) => (
                        <SerieCard key={serie.id} serie={serie}   onClick={() => {onSerieClick(serie);}}
                            />
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
