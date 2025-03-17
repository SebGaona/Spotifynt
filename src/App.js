import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Library from './components/Library';
import './App.css';
import placeholder from './img/placeholder.jpg';



const App = () => {
    const [searchResults, setSearchResults] = useState([
        { id: 1, title: 'Rock Revolution', artist: 'The Rockers', length: '4:30', image: placeholder },
        { id: 2, title: 'Guitar Legends', artist: 'Legendary Strings', length: '5:12', image: placeholder },
        { id: 3, title: 'Thunderstruck Beats', artist: 'Storm Riders', length: '3:45', image: placeholder },
        { id: 4, title: 'Echoes of Freedom', artist: 'Freedom Voices', length: '6:10', image: placeholder },
        { id: 5, title: 'Fire and Strings', artist: 'Flame Band', length: '4:20', image: placeholder },
        { id: 6, title: 'Rise of the Amp', artist: 'Amp Masters', length: '5:00', image: placeholder },
        { id: 7, title: 'Melody in Flames', artist: 'Burning Notes', length: '3:55', image: placeholder },
        { id: 8, title: 'Power Chord', artist: 'Electric Pulse', length: '4:15', image: placeholder },
        { id: 9, title: 'Riff Riders', artist: 'String Cyclones', length: '5:30', image: placeholder },
        { id: 10, title: 'Legends of Noise', artist: 'Noise Makers', length: '4:40', image: placeholder },
        { id: 11, title: 'Chasing Horizons', artist: 'Skyline Band', length: '5:05', image: placeholder },
        { id: 12, title: 'Electric Dreams', artist: 'Neon Pulse', length: '4:25', image: placeholder },
        { id: 13, title: 'Whispering Echoes', artist: 'Echo Beats', length: '6:00', image: placeholder },
        { id: 14, title: 'Shattered Silence', artist: 'Broken Waves', length: '3:50', image: placeholder },
        { id: 15, title: 'Starlight Serenade', artist: 'Cosmic Harmonies', length: '4:35', image: placeholder },
    ]);

    const [library, setLibrary] = useState([]);

    const addToLibrary = (song) => {
        if (!library.some((s) => s.id === song.id)) {
            setLibrary([...library, song]);
        }
    };

    useEffect(() => {
        console.log('Biblioteca actualizada:', library);
    }, [library]);

    return (
        <div className="App">
            <Header />
            <SearchResults songs={searchResults} onAddToLibrary={addToLibrary} />
            <Library library={library} />
        </div>
    );
};

export default App;