import React from 'react';
import { Movie } from '../entities/Movie';
interface ModalFilmProps {
    isOpen: boolean;
    onClose: () => void;
    item: Movie | null;
    isMovie: boolean;
  }
const ModalFilm = ({ isOpen, onClose, item , isMovie }:ModalFilmProps) => {
    if (!isOpen || !item) return null;

    return (
        isMovie? 
        (  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-11/12 max-w-2xl">
                {/* Image du film avec un léger flou et un dégradé de superposition */}
                {item.poster_path && (
                    <div className="relative">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                            alt={item.title}
                            className="w-full h-64 object-cover filter blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>
                    </div>
                )}

                {/* Bouton de fermeture */}
                <button
                    className="absolute top-4 right-4 bg-gray-800 bg-opacity-75 text-white rounded-full p-2 hover:bg-opacity-100 transition"
                    onClick={onClose}
                >
                    ✕
                </button>

                {/* Contenu du modal */}
                <div className="relative p-6">
                    {/* Titre et sous-titre */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">{item.title}</h2>
                    <p className="text-sm text-gray-600 italic mb-4">({item.original_title})</p>

                    {/* Description */}
                    <p className="text-base text-gray-700 mb-6">{item.overview || "Aucune description disponible."}</p>

                    {/* Informations supplémentaires */}
                    <div className="grid grid-cols-2 gap-4 text-gray-800 text-sm">
                        <div>
                            <strong>Date de sortie:</strong> {item.release_date || "Inconnue"}
                        </div>
                        <div>
                            <strong>Langue originale:</strong> {item.original_language.toUpperCase() || "N/A"}
                        </div>
                        <div>
                            <strong>Popularité:</strong> {item.popularity || "Non disponible"}
                        </div>
                        <div>
                            <strong>Note moyenne:</strong> {item.vote_average} / 10
                        </div>
                        <div>
                            <strong>Nombre de votes:</strong> {item.vote_count || "N/A"}
                        </div>
                        <div>
                            <strong>Pour adultes:</strong> {item.adult ? "Oui" : "Non"}
                        </div>
                    </div>
                </div>
            </div>
        </div>):null
    );
};

export default ModalFilm;
