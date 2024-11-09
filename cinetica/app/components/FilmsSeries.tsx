import { useState, useEffect } from "react";
import { Movie } from "../entities/Movie";
import { TVShow } from "../entities/TVShow";
import MovieCard from "./MovieCard";
import SerieCard from "./SerieCard";
import Loading from "./Loading";


export function FilmsSeries() {
    const [data, setData] = useState<{ films: Movie[]; series: TVShow[] } | null>(null);

    useEffect(() => {
        fetch('/api/discover')
            .then((response) => response.json())
            .then((data) => {
                //console.log("Données récupérées :", data.films);
                setData(data);
            });
    }, []);

    return (
        <div>    
            {data === null ? (
                <Loading />
            ) : (
                <div className="flex flex-col container mx-auto px-4 py-8">
                    <div className="mt-8">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Films</h1>
                        <div className="flex flex-wrap justify-center gap-2">
                            {data?.films?.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    </div>
    
                    <div className="mt-8">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Series</h1>

                        <div className="flex flex-wrap justify-center gap-3">
                            {data?.series?.map((serie) => (
                                <SerieCard key={serie.id} serie={serie} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
    
    
}