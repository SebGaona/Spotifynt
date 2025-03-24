import React from "react";
import Song from "../Song";
import { SearchResultsCont, SearchCard, SearchCardImage, SearchCardContent, SearchCardTitle, SearchCardArtist, SearchCardLength, SearchCardActions, Button } from "./styles";

const SearchResults = ({ data, error, onAddToLibrary, onViewDetails }) => {
    return (
        <SearchResultsCont className="search-results">
            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
            {data && data.data.length > 0 ? (
                data.data.map((track) => (
                    <SearchCard className="search-card" key={track.id}>
                        <SearchCardImage src={track.album.cover_medium} alt={track.title} />
                        <SearchCardContent className="search-card-content">
                            <SearchCardTitle className="search-card-title">{track.title}</SearchCardTitle>
                            <SearchCardArtist className="search-card-artist">{track.artist.name}</SearchCardArtist>
                            <SearchCardLength className="search-card-length"> Duracion:
                                {`${Math.floor(track.duration / 60)}:${(track.duration % 60)
                                    .toString()
                                    .padStart(2, "0")}`}
                            </SearchCardLength>
                        </SearchCardContent>
                        <SearchCardActions className="search-card-actions">
                            <Button className="add-button" onClick={() => onAddToLibrary(track)}>
                                Agregar a mi biblioteca
                            </Button>
                            <Button className="details-button" onClick={() => onViewDetails(track)}>
                                Ver Detalles
                            </Button>
                        </SearchCardActions>
                    </SearchCard>
                ))
            ) : (
                <p>No se encontraron resultados.</p>
            )}
        </SearchResultsCont>
    );
};

export default SearchResults;