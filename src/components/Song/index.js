import React from 'react';
import './styles.css';
import placeholder from '../../img/placeholder.jpg';


const Song = ({ title, artist, length, image, onAdd }) => {
    return (
        <div className="song">
            <img src={image || placeholder} alt={title} className="song-image" />
            <h3>{title}</h3>
            <p>Artista: {artist}</p>
            <p>Duración: {length}</p>
            <button onClick={onAdd}>Agregar a mi biblioteca</button>
        </div>
    );
};

export default Song;