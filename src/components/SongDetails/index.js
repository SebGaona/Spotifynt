import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";

const SongDetails = () => {
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const song = location.state; 
    if (!song) {
        return <p>No se encontraron detalles de esta canción.</p>;
    }

    return (
        <div className="song-details">
            <img src={song.album.cover_medium} alt={song.title} />
            <h2>{song.title}</h2>
            <p>Artista: {song.artist.name}</p>
            <p>Duración: {`${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, "0")}`}</p>
            <p className="song-details-album">Álbum: {song.album.title}</p>
            
            <button onClick={() => navigate(-1)}>Regresar</button>
        </div>
    );
};

export default SongDetails;
