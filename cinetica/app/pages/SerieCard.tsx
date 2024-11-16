// components/MovieCard.tsx
import React, { useEffect, useState } from 'react';
import { TVShow } from '../entities/TVShow';
import { Star } from 'lucide-react';
interface MovieCardProps {
    serie: TVShow;
    onClick?: () => void; // Optionnel : pour gérer un clic sur la carte
}

const MovieCard: React.FC<MovieCardProps> = ({ serie, onClick }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    //console.log("Film reçu dans MovieCard :", serie); // Ajout de console.log pour vérifier les données du film

    useEffect(() => {
        // Vérifie si le film est déjà dans les favoris
        const favoritesSeries = JSON.parse(localStorage.getItem('favoritesSeries') || '[]');
        setIsFavorite(favoritesSeries.some((fav: TVShow) => fav.id === serie.id));
    }, [serie.id]);
    const toggleFavorite = () => {
        const favoritesSeries = JSON.parse(localStorage.getItem('favoritesSeries') || '[]');
        if (isFavorite) {
            // Supprime le film des favoris
            const updatedFavorites = favoritesSeries.filter((fav: TVShow) => fav.id !== serie.id);
            localStorage.setItem('favoritesSeries', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
        } else {
            // Ajoute le film aux favoris
            favoritesSeries.push(serie);
            localStorage.setItem('favoritesSeries', JSON.stringify(favoritesSeries));
            setIsFavorite(true);
        }
    };
    return (
        <>
        <div className="bg-white rounded-lg overflow-hidden max-w-xs mx-auto hover:shadow-lg hover:shadow-gray-500/50 transform hover:scale-105 transition-transform duration-300" onClick={onClick}>
            <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 ">{serie.name}</h3>
                <p className="text-sm text-gray-600">{serie.first_air_date}</p>
                <p className="text-sm text-gray-600">{serie.vote_average} / 10</p>
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
