import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LibraryCont, LibrarySong, RemoveButton } from "./styles";
import { removeFromLibrary } from "../../redux/slices/librarySlice";

const Library = () => {
  const library = useSelector((state) => state.library?.library || []);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromLibrary(id));
  };

  return (
    <LibraryCont className="library">
      <h2>Mi Biblioteca</h2>
      {library.length > 0 ? (
        <div className="song-list">
          {library.map((song) => (
            <LibrarySong key={song.id} className="library-song">
              <p>
                {song.title} - {song.artist.name}
              </p>
              <RemoveButton onClick={() => handleRemove(song.id)}>
                Eliminar
              </RemoveButton>
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
