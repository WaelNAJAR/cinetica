import { useState, useEffect } from "react";
import { TVShow } from "../entities/TVShow";
import SerieCard from "./SerieCard";
import Loading from "./Loading";

interface TopRatedSerieProps {
    searchQuery: string;
    onSerieClick: (serie: TVShow) => void;
    setIsMovie : any 
}
export function TopRatedSeries({searchQuery, onSerieClick , setIsMovie}:TopRatedSerieProps) {
    const [data, setData] = useState<{ series: TVShow[]} | null>(null);

    useEffect(() => {
        fetch('/api/shows/top-rated')
            .then((response) => response.json())
            .then((data) => {
                console.log("Donnéesssssssssssss récupérées :", data);
                const filteredSeries = data.filter((serie: TVShow) =>
                    serie.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setData({ series : filteredSeries });
            });
    }, [searchQuery]);

    return (
        <div className="mt-8">
        {data === null ? (
            <Loading/>
        ) : (
            <>
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Top Rated Series</h1>
            <div className="flex flex-wrap justify-center gap-3">
                {data.series?.map((serie) => (
                    <SerieCard key={serie.id} serie={serie}  onClick={() => {onSerieClick(serie);setIsMovie(false);}}/>
                ))}
            </div>
            </>
        )}
    </div>
);
}