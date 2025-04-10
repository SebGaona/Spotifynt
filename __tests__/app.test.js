import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

const mockStore = configureStore([]);

describe("App component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      library: {
        library: [],
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders Header, SearchBar, and Library components", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Spotifyn't")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Busca un artista")).toBeInTheDocument();
    expect(
      screen.getByText("No tienes canciones en tu biblioteca.")
    ).toBeInTheDocument();
  });

  test("search input updates value and displays search results", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByPlaceholderText("Busca un artista");
    fireEvent.change(input, { target: { value: "Coldplay" } });

    expect(input.value).toBe("Coldplay");

    const searchButton = screen.getByText("Buscar");
    fireEvent.click(searchButton);
  });

  test("adds song to library when clicking 'Agregar a mi biblioteca'", () => {
    const mockData = {
      data: [
        {
          id: 1,
          title: "Song A",
          artist: { name: "Artist A" },
          album: { cover_medium: "imageA.jpg" },
        },
      ],
    };

    store = mockStore({
      library: {
        library: [],
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByText("Agregar a mi biblioteca"));

    expect(store.dispatch).toHaveBeenCalled();
  });
});
