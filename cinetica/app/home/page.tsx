// app/home/page.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";  // Assurez-vous de l'importer depuis shadcn
import { AppSidebar } from '../pages/AppSideBar';
import Navbar from '../pages/NavBar';
import { FilmsSeries } from '../pages/FilmsSeries';
import { NowPlaying} from '../pages/NowPlaying' ;
import { PopularMovies } from '../pages/PopularMovies' ; 
import { TopRated } from '../pages/TopRated';
import { OnTheAir } from '../pages/OnTheAir';
import { PopularSeries } from '../pages/PopularSeries' ; 
import { TopRatedSeries } from '../pages/TopRatedSeries';
import ModalFilm from '../pages/ModalFilm';
import ModalSerie from '../pages/ModalSerie';
import { Movie } from '../entities/Movie';
import { TVShow } from '../entities/TVShow';
const HomePage = () => {
    const [selectedContent, setSelectedContent] = useState("");
    const [inMovie, setInMovie] = useState(true);  // pour les appartenances aux menus 
    const [isMovie, setIsMovie] = useState(false);  // pour identifier si c est un movie ou serie 
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState<Movie | TVShow | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    useEffect(() => {
        // Trigger actions when selectedContent changes
        console.log(`selectedContent changed to: ${selectedContent}`);
        // Optionally, reset or refetch data here if needed
    }, [selectedContent]);
    const handleSearch = (query: string) => {
        setSearchQuery(query);
      };

      const handleItemClick = (item: Movie | TVShow ) => { // Utilisation du type union
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <SidebarProvider> {/* Encapsule toute la page dans SidebarProvider */}
            <div className="flex pt-16">
                <Navbar onSearch={handleSearch} setSelectedContent={setSelectedContent}/>
                <AppSidebar setSelectedContent={setSelectedContent} setInMovie={setInMovie} />
                <ModalFilm isOpen={isModalOpen} onClose={closeModal} item={selectedItem as Movie} isMovie={isMovie}/>
                <ModalSerie isOpen={isModalOpen} onClose={closeModal} serie={selectedItem as TVShow} isMovie={isMovie}/>

                {selectedContent === "" ? (
                        <FilmsSeries searchQuery={searchQuery} onMovieClick={handleItemClick} onSerieClick={handleItemClick} setIsMovie={setIsMovie}/> // Affiche par défaut les films et séries
                    ) : (
                        selectedContent === "Now Playing" ? (
                            <NowPlaying searchQuery={searchQuery} onMovieClick={handleItemClick} setIsMovie={setIsMovie} />
                        ) : (selectedContent === "Popular" && inMovie)? (
                            <PopularMovies searchQuery={searchQuery} onMovieClick={handleItemClick} setIsMovie={setIsMovie}/>
                        ) : (selectedContent === "Top Rated" && inMovie) ? (
                            <TopRated searchQuery={searchQuery} onMovieClick={handleItemClick} setIsMovie={setIsMovie}/>
                        ) : selectedContent === "On The Air" ? (
                            <OnTheAir searchQuery={searchQuery} onSerieClick={handleItemClick} setIsMovie={setIsMovie}/>
                        ) : (selectedContent === "Popular" && !inMovie)? (
                            <PopularSeries searchQuery={searchQuery} onSerieClick={handleItemClick} setIsMovie={setIsMovie}/>
                        ) : (selectedContent === "Top Rated" && !inMovie)? (
                            <TopRatedSeries searchQuery={searchQuery} onSerieClick={handleItemClick} setIsMovie={setIsMovie}/>
                        ): (
                            <FilmsSeries searchQuery={searchQuery} onMovieClick={handleItemClick} setIsMovie={setIsMovie} onSerieClick={handleItemClick} /> // Affiche par défaut les films et séries
                        )
                    )}
            </div>

        </SidebarProvider>
    );
};

export default HomePage;
