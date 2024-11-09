// components/MovieCard.tsx
import React from 'react';
import { Movie } from '../entities/Movie';

interface MovieCardProps {
    movie: Movie;
    onClick?: () => void; // Optionnel : pour gérer un clic sur la carte
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
    //console.log("Film reçu dans MovieCard :", movie); // Ajout de console.log pour vérifier les données du film

    return (
        <>
        <div className="bg-white transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-gray-500/50 rounded-lg overflow-hidden max-w-xs mx-auto" onClick={onClick}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 ">{movie.title}</h3>
                <p className="text-sm text-gray-600">{movie.release_date}</p>
                <p className="text-sm text-gray-600">{movie.vote_average} / 10</p>
            </div>
        </div>
        </>
    );
};

export default MovieCard;
