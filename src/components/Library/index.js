import React from "react";
import "./styles.css";

const Library = ({ library }) => {
    return (
        <div className="library">
            <h2>Mi Biblioteca</h2>
            {library.length > 0 ? (
                <div className="song-list">
                    {library.map((song) => (
                        <div key={song.id} className="library-song">
                            <p>{song.title} - {song.artist.name}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No tienes canciones en tu biblioteca.</p>
            )}
        </div>
    );
};

export default Library;
