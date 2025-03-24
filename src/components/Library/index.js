import React from "react";
import { LibraryCont, LibrarySong } from "./styles";

const Library = ({ library }) => {
    return (
        <LibraryCont className="library">
            <h2>Mi Biblioteca</h2>
            {library.length > 0 ? (
                <div className="song-list">
                    {library.map((song) => (
                        <LibrarySong key={song.id} className="library-song">
                            <p>{song.title} - {song.artist.name}</p>
                        </LibrarySong>
                    ))}
                </div>
            ) : (
                <p>No tienes canciones en tu biblioteca.</p>
            )}
        </LibraryCont>
    );
};

export default Library;
