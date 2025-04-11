import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Library from "../Library";
import "@testing-library/jest-dom";

const mockStore = configureMockStore();
const mockRemoveFromLibrary = jest.fn();

describe("Library Component", () => {
  const mockSongs = [
    { id: 1, title: "Canción 1", artist: { name: "Artista 1" } },
    { id: 2, title: "Canción 2", artist: { name: "Artista 2" } },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows the "Mi Biblioteca" title', () => {
    const store = mockStore({ library: { library: [] } });

    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    expect(screen.getByText("Mi Biblioteca")).toBeInTheDocument();
  });

  it("shows a message when the library is empty", () => {
    const store = mockStore({ library: { library: [] } });

    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    expect(
      screen.getByText("No tienes canciones en tu biblioteca.")
    ).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should show songs correctly", () => {
    const store = mockStore({ library: { library: mockSongs } });

    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    mockSongs.forEach((song) => {
      const songText = `${song.title} - ${song.artist.name}`;
      expect(screen.getByText(songText)).toBeInTheDocument();
    });

    const removeButtons = screen.getAllByText("Eliminar");
    expect(removeButtons).toHaveLength(mockSongs.length);
  });

  it('executes handleRemove when "Eliminar" is clicked', () => {
    const store = mockStore({
      library: { library: mockSongs },
    });

    store.dispatch = mockRemoveFromLibrary;

    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    const firstRemoveButton = screen.getAllByText("Eliminar")[0];
    fireEvent.click(firstRemoveButton);

    expect(mockRemoveFromLibrary).toHaveBeenCalledTimes(1);
    expect(mockRemoveFromLibrary).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "library/removeFromLibrary",
        payload: mockSongs[0].id,
      })
    );
  });

  it("shows songs correctly", () => {
    const store = mockStore({ library: { library: mockSongs } });

    const { container } = render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    const songElements = container.querySelectorAll(".library-song");
    expect(songElements).toHaveLength(mockSongs.length);

    songElements.forEach((songElement, index) => {
      expect(songElement).toHaveTextContent(mockSongs[index].title);
      expect(songElement).toHaveTextContent(mockSongs[index].artist.name);
      expect(songElement.querySelector("button")).toHaveTextContent("Eliminar");
    });
  });
});
