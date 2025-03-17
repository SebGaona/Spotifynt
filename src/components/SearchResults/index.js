import React, { useState } from 'react';
import Song from '../Song';
import './styles.css';

const SearchResults = ({ songs, onAddToLibrary }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSongs = songs.filter((song) =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-results">
            <h2>Resultados de Búsqueda</h2>
            <input
                type="text"
                placeholder="Buscar canciones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="song-list">
                {filteredSongs.map((song) => (
                    <Song
                        key={song.id}
                        title={song.title}
                        artist={song.artist}
                        length={song.length}
                        image={song.image}
                        onAdd={() => onAddToLibrary(song)}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;