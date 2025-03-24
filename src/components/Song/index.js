import React from "react";
import placeholder from "../../img/placeholder.jpg";
import {SongCont, SongImage, Button} from "./styles";


const Song = ({ title, artist, length, image, onAdd, onViewDetails }) => {
    return (
        <SongCont className="song">
            <SongImage src={image || placeholder} alt={title} className="song-image" />
            <h3>{title}</h3>
            <p>Artista: {artist}</p>
            <p>Duración: {length}</p>
            <Button onClick={onAdd}>Agregar a mi biblioteca</Button>
            <Button onClick={onViewDetails}>Ver Detalles</Button>
        </SongCont>
    );
};

export default Song;
