// app/home/page.tsx
"use client";
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";  // Assurez-vous de l'importer depuis shadcn
import { AppSidebar } from '../components/AppSideBar';
import Navbar from '../components/NavBar';
import { FilmsSeries } from '../components/FilmsSeries';
import { NowPlaying} from '../components/NowPlaying' ;
import { PopularMovies } from '../components/PopularMovies' ; 
import { TopRated } from '../components/TopRated';
import { OnTheAir } from '../components/OnTheAir';
import { PopularSeries } from '../components/PopularSeries' ; 
import { TopRatedSeries } from '../components/TopRatedSeries';
import ModalFilm from '../components/ModalFilm';
import ModalSerie from '../components/ModalSerie';
const HomePage = () => {
    const [selectedContent, setSelectedContent] = useState("");
    const [inMovie, setInMovie] = useState(true);  // pour les appartenances aux menus 
    const [isMovie, setIsMovie] = useState(false);  // pour identifier si c est un movie ou serie 
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSearch = (query: string) => {
        setSearchQuery(query);
      };

    const handleItemClick = (item:any) => {
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
                <Navbar onSearch={handleSearch}/>
                <AppSidebar setSelectedContent={setSelectedContent} setInMovie={setInMovie} />
                <ModalFilm isOpen={isModalOpen} onClose={closeModal} item={selectedItem} isMovie={isMovie}/>
                <ModalSerie isOpen={isModalOpen} onClose={closeModal} serie={selectedItem} isMovie={isMovie}/>

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
