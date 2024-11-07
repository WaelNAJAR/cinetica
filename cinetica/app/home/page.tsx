// app/home/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import SerieCard from '../components/SerieCard';
import { Movie } from '../entities/Movie';
import { TVShow } from '../entities/TVShow';
import Sidebar from '../components/SideBar';
const HomePage = () => {
    //const [movies, setMovies] = useState<Movie[]>([]);
    //const [series, setSeries] = useState<TVShow[]>([]);
    const [data, setData] = useState<{ films: Movie[]; series: TVShow[] } | null>(null);
    


    useEffect(() => {
        fetch('/api/discover')
            .then((response) => response.json())
            .then((data) => {
                //setMovies(data.results.films); // en supposant que les films sont dans `data.results`
                //setSeries(data.results.series);
                console.log("Données récupérées :", data.films); // Ajout de console.log pour vérifier les données
                setData(data);
            });
    }, []);

    return (
        <>
        <Sidebar />

<div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Films</h1>
    
    {data === null ? (
        <p className="text-center text-gray-600 text-lg">Chargement...</p>  // Indicateur de chargement stylisé
    ) : (
        <div className="flex flex-wrap justify-center gap-6">
            {data.films?.map((movie) => {
                console.log("Film affiché :", movie); // Affiche chaque film dans la console
                return <MovieCard key={movie.id} movie={movie} />;
            })}
        </div>
    )}
</div>

<div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Series</h1>
    
    {data === null ? (
        <p className="text-center text-gray-600 text-lg">Chargement...</p>  // Indicateur de chargement stylisé
    ) : (
        <div className="flex flex-wrap justify-center gap-4">
            {data.series?.map((serie) => {
                console.log("Film affiché :", serie); // Affiche chaque film dans la console
                return <SerieCard key={serie.id} serie={serie} />;
            })}
        </div>
    )}
</div>
</>
    );
};

export default HomePage;
