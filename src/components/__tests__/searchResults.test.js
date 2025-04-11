import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import SearchResults from "../SearchResults";
import "@testing-library/jest-dom";

const mockTracks = {
  data: [
    {
      id: 1,
      title: "Song 1",
      artist: {
        name: "Artist 1",
      },
      album: {
        cover_medium: "cover1.jpg",
      },
      duration: 183,
    },
    {
      id: 2,
      title: "Song 2",
      artist: {
        name: "Artist 2",
      },
      album: {
        cover_medium: "cover2.jpg",
      },
      duration: 215,
    },
  ],
};

const mockError = {
  message: "Test error message",
};

describe("SearchResults Component", () => {
  const mockAddToLibrary = jest.fn();
  const mockViewDetails = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render error message when error is provided", () => {
    render(
      <SearchResults
        error={mockError}
        onAddToLibrary={mockAddToLibrary}
        onViewDetails={mockViewDetails}
      />
    );

    expect(screen.getByText(`Error: ${mockError.message}`)).toBeInTheDocument();
    expect(screen.getByText(`Error: ${mockError.message}`)).toHaveStyle(
      "color: red"
    );
  });

  it('should render "No results" message when no data is provided', () => {
    render(
      <SearchResults
        onAddToLibrary={mockAddToLibrary}
        onViewDetails={mockViewDetails}
      />
    );

    expect(
      screen.getByText("No se encontraron resultados.")
    ).toBeInTheDocument();
  });

  it("should render list of tracks when data is provided", () => {
    render(
      <SearchResults
        data={mockTracks}
        onAddToLibrary={mockAddToLibrary}
        onViewDetails={mockViewDetails}
      />
    );

    mockTracks.data.forEach((track) => {
      expect(screen.getByText(track.title)).toBeInTheDocument();
      expect(screen.getByText(track.artist.name)).toBeInTheDocument();
    });

    const cards = screen.getAllByTestId("track-card");
    expect(cards).toHaveLength(mockTracks.data.length);
  });

  it('should call onAddToLibrary when "Agregar" button is clicked', () => {
    render(
      <SearchResults
        data={mockTracks}
        onAddToLibrary={mockAddToLibrary}
        onViewDetails={mockViewDetails}
      />
    );

    const addButtons = screen.getAllByText("Agregar a mi biblioteca");
    expect(addButtons).toHaveLength(mockTracks.data.length);

    fireEvent.click(addButtons[0]);
    expect(mockAddToLibrary).toHaveBeenCalledTimes(1);
    expect(mockAddToLibrary).toHaveBeenCalledWith(mockTracks.data[0]);
  });

  it('should call onViewDetails when "Ver Detalles" button is clicked', () => {
    render(
      <SearchResults
        data={mockTracks}
        onAddToLibrary={mockAddToLibrary}
        onViewDetails={mockViewDetails}
      />
    );

    const detailsButtons = screen.getAllByText("Ver Detalles");
    expect(detailsButtons).toHaveLength(mockTracks.data.length);

    fireEvent.click(detailsButtons[1]);
    expect(mockViewDetails).toHaveBeenCalledTimes(1);
    expect(mockViewDetails).toHaveBeenCalledWith(mockTracks.data[1]);
  });
});
