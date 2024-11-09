// components/MovieCard.tsx
import React from 'react';
import { TVShow } from '../entities/TVShow';
interface MovieCardProps {
    serie: TVShow;
    onClick?: () => void; // Optionnel : pour gérer un clic sur la carte
}

const MovieCard: React.FC<MovieCardProps> = ({ serie, onClick }) => {
    //console.log("Film reçu dans MovieCard :", serie); // Ajout de console.log pour vérifier les données du film

    return (
        <>
        <div className="bg-white rounded-lg overflow-hidden max-w-xs mx-auto hover:shadow-lg hover:shadow-gray-500/50 transform hover:scale-105 transition-transform duration-300" onClick={onClick}>
            <img src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`} alt={serie.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 ">{serie.name}</h3>
                <p className="text-sm text-gray-600">{serie.first_air_date}</p>
                <p className="text-sm text-gray-600">{serie.vote_average} / 10</p>
            </div>
        </div>
        </>
    );

};

export default MovieCard;
