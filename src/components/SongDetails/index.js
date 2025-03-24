import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {SongDetailsCont, SongDetailsImage, SongDetailsTitle, SongDetailsParagraph, SongDetailsAlbum, SongDetailsButton} from "./styles";


const SongDetails = () => {
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const song = location.state; 
    if (!song) {
        return <p>No se encontraron detalles de esta canción.</p>;
    }

    return (
        <SongDetailsCont className="song-details">
            <SongDetailsImage src={song.album.cover_medium} alt={song.title} />
            <SongDetailsTitle>{song.title}</SongDetailsTitle>
            <SongDetailsTitle>Artista: {song.artist.name}</SongDetailsTitle>
            <SongDetailsParagraph>Duración: {`${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, "0")}`}</SongDetailsParagraph>
            <SongDetailsAlbum className="song-details-album">Álbum: {song.album.title}</SongDetailsAlbum>
            
            <SongDetailsButton onClick={() => navigate(-1)}>Regresar</SongDetailsButton>
        </SongDetailsCont>
    );
};

export default SongDetails;
