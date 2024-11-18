'use client';
// components/FavoritesFilms.tsx
import React, { useEffect, useState } from 'react';
import { Movie } from '../entities/Movie';
import MovieCard from './MovieCard';
interface FavoritesFilmsProps {
    searchQuery: string;
    onMovieClick: (movie: Movie) => void; 
}
const FavoritesFilms: React.FC<FavoritesFilmsProps> = ({ searchQuery, onMovieClick }) => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        // Récupérer les favoris depuis localStorage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        // Appliquer le filtrage si searchQuery est défini et non vide
        if (searchQuery) {
            const filteredFavorites = storedFavorites.filter((movie: Movie) =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFavorites(filteredFavorites);
        } else {
            setFavorites(storedFavorites); // Si pas de searchQuery, afficher tous les favoris
        }
    }, [searchQuery]); // Ajout de searchQuery comme dépendance
    

    return (
        <div className="min-h-screen  text-gray-700 py-8 px-6">
            <h2 className="text-4xl font-bold mb-6 text-center ">Vos Films Favoris</h2>
            {favorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                    {favorites.map((movie) => (
                        <MovieCard 
                        key={movie.id} 
                        movie={movie} 
                        onClick={() => {onMovieClick(movie);
                        }} 
                    />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center h-64">
                    <p className="text-lg text-gray-400">Aucun film n a été ajouté aux favoris.</p>
                </div>
            )}
        </div>
    );
};

export default FavoritesFilms;
