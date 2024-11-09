import { useState, useEffect } from "react";
import { TVShow } from "../entities/TVShow";
import SerieCard from "./SerieCard";
import Loading from "./Loading";


export function TopRatedSeries() {
    const [data, setData] = useState<{ series: TVShow[]} | null>(null);

    useEffect(() => {
        fetch('/api/shows/top-rated')
            .then((response) => response.json())
            .then((data) => {
                console.log("Donnéesssssssssssss récupérées :", data);
                setData({ series : data });
            });
    }, []);

    return (
        <div className="mt-8">
        {data === null ? (
            <Loading/>
        ) : (
            <>
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Top Rated Series</h1>
            <div className="flex flex-wrap justify-center gap-3">
                {data.series?.map((serie) => (
                    <SerieCard key={serie.id} serie={serie} />
                ))}
            </div>
            </>
        )}
    </div>
);
}