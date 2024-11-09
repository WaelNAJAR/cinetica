import { useState, useEffect } from "react";
import { Movie } from "../entities/Movie";
import MovieCard from "./MovieCard";
import Loading from "./Loading";


export function TopRated() {
    const [data, setData] = useState<{ films: Movie[]} | null>(null);

    useEffect(() => {
        fetch('/api/movies/top-rated')
            .then((response) => response.json())
            .then((data) => {
                console.log("Donnéesssssssssssss récupérées :", data);
                setData({ films: data });
            });
    }, []);

    return (
        <div className="flex flex-col container mx-auto px-4 py-8">
            {/* Section Films */}
            <div>
                {data === null ? (
                    <Loading/>
                ) : (
                    <>
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Top Rated Films</h1>
                    <div className="flex flex-wrap justify-center gap-2">
                        {data?.films?.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                    </>
                )}
            </div>

</div>
);
}