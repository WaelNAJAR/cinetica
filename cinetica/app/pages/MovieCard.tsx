// components/MovieCard.tsx
import React, { useEffect, useState } from 'react';
import { Movie } from '../entities/Movie';
import { Star } from 'lucide-react';

interface MovieCardProps {
    movie: Movie;
    onClick?: () => void; // Optionnel : pour gérer un clic sur la carte
}


const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
    //console.log("Film reçu dans MovieCard :", movie); // Ajout de console.log pour vérifier les données du film
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        // Vérifie si le film est déjà dans les favoris
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some((fav: Movie) => fav.id === movie.id));
    }, [movie.id]);
    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (isFavorite) {
            // Supprime le film des favoris
            const updatedFavorites = favorites.filter((fav: Movie) => fav.id !== movie.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            // Ajoute le film aux favoris
            favorites.push(movie);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };
    return (
        <>
        <div className="bg-white transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-gray-500/50 rounded-lg overflow-hidden max-w-xs mx-auto" onClick={onClick}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 ">{movie.title}</h3>
                <p className="text-sm text-gray-600">{movie.release_date}</p>
                <p className="text-sm text-gray-600">{movie.vote_average} / 10</p>
            </div>
            <button
                    onClick={(e) => {
                        e.stopPropagation(); // Empêche le clic sur l'étoile de déclencher `onClick`
                        toggleFavorite();
                    }}
                    className={`text-lg ${isFavorite ? 'text-yellow-400' : 'text-gray-400'}`}
                >
                    <Star />
                </button>
        </div>
        </>
    );
};

export default MovieCard;
