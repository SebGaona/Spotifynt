import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchResults from "./SearchResults";

describe("SearchResults component", () => {
  const mockOnAddToLibrary = jest.fn();
  const mockOnViewDetails = jest.fn();
  const mockData = {
    data: [
      {
        id: 1,
        title: "Song A",
        artist: { name: "Artist A" },
        album: { cover_medium: "imageA.jpg" },
        duration: 210,
      },
      {
        id: 2,
        title: "Song B",
        artist: { name: "Artist B" },
        album: { cover_medium: "imageB.jpg" },
        duration: 180,
      },
    ],
  };

  test("renders search results correctly", () => {
    render(
      <SearchResults
        data={mockData}
        error={null}
        onAddToLibrary={mockOnAddToLibrary}
        onViewDetails={mockOnViewDetails}
      />
    );

    expect(screen.getByText("Song A")).toBeInTheDocument();
    expect(screen.getByText("Artist A")).toBeInTheDocument();
    expect(screen.getByText("Duracion: 3:30")).toBeInTheDocument();

    expect(screen.getByText("Song B")).toBeInTheDocument();
    expect(screen.getByText("Artist B")).toBeInTheDocument();
    expect(screen.getByText("Duracion: 3:00")).toBeInTheDocument();
  });

  test("calls onAddToLibrary when 'Agregar a mi biblioteca' button is clicked", () => {
    render(
      <SearchResults
        data={mockData}
        error={null}
        onAddToLibrary={mockOnAddToLibrary}
        onViewDetails={mockOnViewDetails}
      />
    );

    const addButtons = screen.getAllByText("Agregar a mi biblioteca");
    fireEvent.click(addButtons[0]);

    expect(mockOnAddToLibrary).toHaveBeenCalledWith(mockData.data[0]);
  });

  test("calls onViewDetails when 'Ver Detalles' button is clicked", () => {
    render(
      <SearchResults
        data={mockData}
        error={null}
        onAddToLibrary={mockOnAddToLibrary}
        onViewDetails={mockOnViewDetails}
      />
    );

    const detailButtons = screen.getAllByText("Ver Detalles");
    fireEvent.click(detailButtons[0]);

    expect(mockOnViewDetails).toHaveBeenCalledWith(mockData.data[0]);
  });

  test("shows error message when an error exists", () => {
    render(
      <SearchResults
        data={null}
        error={{ message: "Error al cargar los resultados" }}
        onAddToLibrary={mockOnAddToLibrary}
        onViewDetails={mockOnViewDetails}
      />
    );

    expect(
      screen.getByText("Error: Error al cargar los resultados")
    ).toBeInTheDocument();
  });

  test("shows 'No se encontraron resultados' when data is empty", () => {
    render(
      <SearchResults
        data={{ data: [] }}
        error={null}
        onAddToLibrary={mockOnAddToLibrary}
        onViewDetails={mockOnViewDetails}
      />
    );

    expect(
      screen.getByText("No se encontraron resultados.")
    ).toBeInTheDocument();
  });
});
