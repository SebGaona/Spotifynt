import React, { useState } from "react";
import { SearchBarCont, Button, SearchInput, SearchButton } from "./styles";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);
  };

  return (
    <SearchBarCont
      className="search-bar"
      onSubmit={handleSubmit}
      data-testid="search-form"
    >
      <SearchInput
        type="text"
        placeholder="Busca un artista"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <SearchButton type="submit">Buscar</SearchButton>
    </SearchBarCont>
  );
};

export default SearchBar;
