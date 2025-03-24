import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import SongDetails from "./components/SongDetails";
import useFetchSongs from "./hooks/useFetchSongs";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/Index";

const App = () => {
    const [library, setLibrary] = useState([]);
    const { data, error, handleSearch } = useFetchSongs();
    const navigate = useNavigate();

    const addToLibrary = (song) => {
        setLibrary((prevLibrary) => {
            if (!prevLibrary.some((s) => s.id === song.id)) {
                console.log("Canción agregada:", song);
                return [...prevLibrary, song];
            }
            console.log(`La canción "${song.title}" ya está en la biblioteca.`);
            return prevLibrary;
        });
    };

    const viewSongDetails = (song) => {
        navigate(`/song/${song.id}`, { state: song });
    };

    useEffect(() => {
        console.log("Estado de library actualizado:", library);
    }, [library]);

    return (
        <ThemeProvider theme={Theme}>
        <div className="App">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="main-view">
                            <SearchBar onSearch={handleSearch} />
                {data && data.data.length > 0 && (
                    <div className="search-results">
                        <SearchResults
                            data={data}
                            error={error}
                            onAddToLibrary={addToLibrary}
                            onViewDetails={viewSongDetails}
                        />
                    </div>
                )}
                                <Library library={library} />
                            </div>
                    }
                />
                <Route path="/song/:id" element={<SongDetails />} />
            </Routes>
        </div>
        </ThemeProvider>
    );
};

export default App;
