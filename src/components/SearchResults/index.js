import React from "react";
import Song from "../Song";
import './styles.css'

const SearchResults = ({ data, error, onAddToLibrary, onViewDetails }) => {
    return (
        <div className="search-results">
            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
            {data && data.data.length > 0 ? (
                data.data.map((track) => (
                    <div className="search-card" key={track.id}>
                        <img src={track.album.cover_medium} alt={track.title} />
                        <div className="search-card-content">
                            <p className="search-card-title">{track.title}</p>
                            <p className="search-card-artist">{track.artist.name}</p>
                            <p className="search-card-length"> Duracion:
                                {`${Math.floor(track.duration / 60)}:${(track.duration % 60)
                                    .toString()
                                    .padStart(2, "0")}`}
                            </p>
                        </div>
                        <div className="search-card-actions">
                            <button className="add-button" onClick={() => onAddToLibrary(track)}>
                                Agregar a mi biblioteca
                            </button>
                            <button className="details-button" onClick={() => onViewDetails(track)}>
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No se encontraron resultados.</p>
            )}
        </div>
    );
};

export default SearchResults;