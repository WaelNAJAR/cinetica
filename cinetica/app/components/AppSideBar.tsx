import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    useSidebar,
} from "@/components/ui/sidebar";

import { Film, Tv, Star, LogOut, Menu, ChevronLeft } from "lucide-react"; // Icônes de Lucide

export function AppSidebar({setSelectedContent,setInMovie}) {
    const { toggleSidebar, state } = useSidebar(); // Utilisation du hook pour basculer la sidebar et accéder à son état

    return (
        <div className="relative">
            {/* Icône pour ouvrir/fermer la sidebar */}
            <button
                onClick={toggleSidebar}
                className="absolute top-4 -right-10 z-20 bg-gray-700 text-white p-2 w-8 h-8 flex items-center justify-center hover:bg-gray-600 rounded-md shadow-md"
            >
                {state === "expanded" ? <ChevronLeft /> : <Menu />}
            </button>


            <Sidebar
                className={`w-64 bg-gray-900 text-gray-200 ${state === "collapsed" ? "w-16" : "w-64"}`}
            >
                {/* Entête du Sidebar */}
                <SidebarHeader>
                    <h2 className="text-xl font-semibold text-center text-gray-700">Cinetica</h2>
                    <br/>
                </SidebarHeader>

                {/* Contenu du Sidebar */}
                <SidebarContent>
                    {/* Section Movies */}
                    <SidebarGroup>
                        <h3 className="text-sm font-semibold uppercase px-4 py-2 text-gray-500">Movies</h3>
                        <button onClick={() => setSelectedContent("Now Playing")}
                            className="hover:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-white">
                                <Film />
                                <span className={`${state === "collapsed" ? "hidden" : ""}`}>Now Playing</span>
                            </div>
                        </button>
                        <button onClick={() => {setSelectedContent("Popular");
                                                setInMovie(true);
                        }}
                                className="hover:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-white">
                                <Film />
                                <span className={`${state === "collapsed" ? "hidden" : ""}`}>Popular</span>
                            </div>
                        </button>
                        <button onClick={() => setSelectedContent("Top Rated")}
                                className="hover:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-white">
                                <Film />
                                <span className={`${state === "collapsed" ? "hidden" : ""}`}>Top Rated</span>
                            </div>
                        </button>

                    </SidebarGroup>

                    {/* Section TV Shows */}
                    <SidebarGroup>
                        <h3 className="text-sm font-semibold uppercase px-4 py-2 text-gray-500">TV Shows</h3>
                        <button onClick={()=>setSelectedContent("On The Air")} 
                        className="hover:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-white">
                                <Tv />
                                <span className={`${state === "collapsed" ? "hidden" : ""}`}>On The Air</span>
                            </div>
                        </button>
                        <button onClick={()=>{setInMovie(false);
                                            setSelectedContent("Popular");
                        }}
                        className="hover:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-white">
                                <Tv />
                                <span className={`${state === "collapsed" ? "hidden" : ""}`}>Popular</span>
                            </div>
                        </button>
                        <button onClick={()=>{
                            setInMovie(false);
                            setSelectedContent("Top Rated");
                        }} className="hover:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-white">
                                <Tv />
                                <span className={`${state === "collapsed" ? "hidden" : ""}`}>Top Rated</span>
                            </div>
                        </button>
                    </SidebarGroup>

                    {/* Section Favorites */}
                    <SidebarGroup>
                        <h3 className="text-sm font-semibold uppercase px-4 py-2 text-gray-500">Favorites</h3>
                        <div className="hover:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-white">
                                <Star />
                                <span className={`${state === "collapsed" ? "hidden" : ""}`}>Favorite Movies</span>
                            </div>
                        </div>
                        <div className="hover:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-white">
                                <Star />
                                <span className={`${state === "collapsed" ? "hidden" : ""}`}>Favorite Shows</span>
                            </div>
                        </div>
                    </SidebarGroup>
                </SidebarContent>

                {/* Pied du Sidebar avec option de déconnexion */}
                <SidebarFooter>
                    <div className="hover:bg-gray-800 rounded-lg">
                        <div className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-white">
                            <LogOut />
                            <span className={`${state === "collapsed" ? "hidden" : ""}`}>Log Out</span>
                        </div>
                    </div>
                </SidebarFooter>
            </Sidebar>
        </div>
    );
}
