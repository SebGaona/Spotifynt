import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Library from "../src/components/Library";
import { removeFromLibrary } from "../src/redux/slices/librarySlice";

const mockStore = configureStore([]);

describe("Library component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      library: {
        library: [
          { id: 1, title: "Song A", artist: { name: "Artist A" } },
          { id: 2, title: "Song B", artist: { name: "Artist B" } },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  test("renders library songs correctly", () => {
    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    expect(screen.getByText("Mi Biblioteca")).toBeInTheDocument();
    expect(screen.getByText("Song A - Artist A")).toBeInTheDocument();
    expect(screen.getByText("Song B - Artist B")).toBeInTheDocument();
  });

  test("calls removeFromLibrary action on delete button click", () => {
    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    const removeButtons = screen.getAllByText("Eliminar");
    fireEvent.click(removeButtons[0]);

    expect(store.dispatch).toHaveBeenCalledWith(removeFromLibrary(1));
  });

  test("shows empty state message when no songs are present", () => {
    store = mockStore({
      library: {
        library: [],
      },
    });

    render(
      <Provider store={store}>
        <Library />
      </Provider>
    );

    expect(
      screen.getByText("No tienes canciones en tu biblioteca.")
    ).toBeInTheDocument();
  });
});
