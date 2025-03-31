import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToLibrary } from "./redux/slices/librarySlice";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Library from "./components/Library";
import SongDetails from "./components/SongDetails";
import useFetchSongs from "./hooks/useFetchSongs";
import { ThemeProvider } from "styled-components";
import Theme from "./theme/Index";

const App = () => {
  const library = useSelector((state) => state.library.library);
  const dispatch = useDispatch();
  const { data, error, handleSearch } = useFetchSongs();
  const navigate = useNavigate();

  const handleAddToLibrary = (song) => {
    dispatch(addToLibrary(song));
  };

  const viewSongDetails = (song) => {
    navigate(`/song/${song.id}`, { state: song });
  };

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
                      onAddToLibrary={handleAddToLibrary} // Usa la función actualizada
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
