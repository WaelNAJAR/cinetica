// components/MovieDetails.tsx

import React from 'react';
import { Movie } from '../entities/Movie';

interface MovieDetailsProps {
  movie: Movie;
  onBack: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie, onBack }) => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <button onClick={onBack} className="text-blue-500">Retour</button>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="w-full h-60 object-cover mb-4" />
      <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-600 mb-4">{movie.release_date}</p>
      <p className="text-gray-800 mb-4">{movie.overview}</p>
      <p className="text-sm text-gray-600">Note : {movie.vote_average} / 10</p>
      <p className="text-sm text-gray-600">Popularité : {movie.popularity}</p>
    </div>
  );
};

export default MovieDetails;
