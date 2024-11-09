// app/home/page.tsx
"use client";
import React, { useState } from 'react';
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";  // Assurez-vous de l'importer depuis shadcn
import { AppSidebar } from '../components/AppSideBar';
import Navbar from '../components/NavBar';
import { FilmsSeries } from '../components/FilmsSeries';
import { NowPlaying} from '../components/NowPlaying' ;
import { PopularMovies } from '../components/PopularMovies' ; 
import { TopRated } from '../components/TopRated';
import { OnTheAir } from '../components/OnTheAir';
import { PopularSeries } from '../components/PopularSeries' ; 
import { TopRatedSeries } from '../components/TopRatedSeries';
const HomePage = () => {
    const [selectedContent, setSelectedContent] = useState("");
    const [inMovie, setInMovie] = useState(true);





    return (
        <SidebarProvider> {/* Encapsule toute la page dans SidebarProvider */}
            <div className="flex pt-16">
                <Navbar />
                <AppSidebar setSelectedContent={setSelectedContent} setInMovie={setInMovie} />


                {selectedContent === "" ? (
                        <FilmsSeries /> // Affiche par défaut les films et séries
                    ) : (
                        selectedContent === "Now Playing" ? (
                            <NowPlaying />
                        ) : (selectedContent === "Popular" && inMovie)? (
                            <PopularMovies />
                        ) : (selectedContent === "Top Rated" && inMovie) ? (
                            <TopRated />
                        ) : selectedContent === "On The Air" ? (
                            <OnTheAir />
                        ) : (selectedContent === "Popular" && !inMovie)? (
                            <PopularSeries />
                        ) : (selectedContent === "Top Rated" && !inMovie)? (
                            <TopRatedSeries />
                        ): (
                            <FilmsSeries />
                        )
                    )}
            </div>

        </SidebarProvider>
    );
};

export default HomePage;
