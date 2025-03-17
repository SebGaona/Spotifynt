import React from 'react';
import './styles.css';

const Library = ({ library }) => {
    return (
        <div className="library">
            <h2>Mi Biblioteca</h2>
            <div className="song-list">
                {library.map((song) => (
                    <div key={song.id} className="library-song">
                        <p>{song.title} - {song.artist}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Library;