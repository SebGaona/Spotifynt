import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../src/components/SearchBar";

describe("SearchBar component", () => {
  const mockOnSearch = jest.fn();

  test("renders search input correctly", () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    expect(screen.getByPlaceholderText("Busca un artista")).toBeInTheDocument();
  });

  test("updates input value when user types", () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Busca un artista");
    fireEvent.change(input, { target: { value: "Coldplay" } });

    expect(input.value).toBe("Coldplay");
  });

  test("calls onSearch function when clicking 'Buscar' button", () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Busca un artista");
    fireEvent.change(input, { target: { value: "Coldplay" } });

    const searchButton = screen.getByText("Buscar");
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith("Coldplay");
  });

  test("calls onSearch function when pressing 'Enter'", () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText("Busca un artista");
    fireEvent.change(input, { target: { value: "Coldplay" } });

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockOnSearch).toHaveBeenCalledWith("Coldplay");
  });
});
