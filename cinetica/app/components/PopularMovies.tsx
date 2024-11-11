import { useState, useEffect } from "react";
import { Movie } from "../entities/Movie";
import MovieCard from "./MovieCard";
import Loading from "./Loading";

interface PopularFilmProps {
    searchQuery: string;
    onMovieClick: (movie: Movie) => void;
    setIsMovie : any ; 
}
export function PopularMovies({ searchQuery, onMovieClick , setIsMovie }: PopularFilmProps) {
    const [data, setData] = useState<{ films: Movie[] } | null>(null);

    useEffect(() => {
        fetch('/api/movies/popular')
            .then((response) => response.json())
            .then((data) => {
                const filteredMovies = data.filter((movie: Movie) =>
                    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setData({ films: filteredMovies });
            });
    }, [searchQuery]);

    return (
        <div className="flex flex-col container mx-auto px-4 py-8">
            {/* Section Films */}
            <div>
                {data === null ? (
                    <Loading />
                ) : (
                    <>
                        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Popular Films</h1>
                        <div className="flex flex-wrap justify-center gap-2">
                            {data?.films?.map((movie) => (
                                <MovieCard key={movie.id} movie={movie} onClick={() =>{ onMovieClick(movie); setIsMovie(true);}}
                                />
                            ))}
                        </div>
                    </>

                )}
            </div>

        </div>
    );
}