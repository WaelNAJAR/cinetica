import React from 'react';

const ModalSerie = ({ isOpen, onClose, serie , isMovie }) => {
    if (!isOpen || !serie) return null;

    return (
        isMovie?null:
        (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-11/12 max-w-2xl">
                {/* Image de fond floutée */}
                {serie.backdrop_path && (
                    <div className="relative">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
                            alt={serie.name}
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-1">{serie.name}</h2>
                    <p className="text-sm text-gray-600 italic mb-4">({serie.original_name})</p>

                    {/* Description */}
                    <p className="text-base text-gray-700 mb-6">{serie.overview || "Aucune description disponible."}</p>

                    {/* Informations supplémentaires */}
                    <div className="grid grid-cols-2 gap-4 text-gray-800 text-sm">
                        <div>
                            <strong>Date de première diffusion:</strong> {serie.first_air_date || "Inconnue"}
                        </div>
                        <div>
                            <strong>Langue originale:</strong> {serie.original_language.toUpperCase() || "N/A"}
                        </div>
                        <div>
                            <strong>Popularité:</strong> {serie.popularity || "Non disponible"}
                        </div>
                        <div>
                            <strong>Note moyenne:</strong> {serie.vote_average} / 10
                        </div>
                        <div>
                            <strong>Nombre de votes:</strong> {serie.vote_count || "N/A"}
                        </div>
                        <div>
                            <strong>Pays d'origine:</strong> {serie.origin_country?.join(", ") || "Inconnu"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    );
};

export default ModalSerie;
