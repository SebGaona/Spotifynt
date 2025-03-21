import React, { useState } from "react";
import './styles.css';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onSearch(input); 
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Busca un artista"
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button type="submit">Buscar</button>
        </form>
    );
};

export default SearchBar;
