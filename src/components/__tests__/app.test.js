import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "../../App";
import libraryReducer from "../../redux/slices/librarySlice";
import "@testing-library/jest-dom";

// Mock de react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => <div>{element}</div>,
}));

// Mock de componentes hijos con export default
jest.mock("../../components/Header", () => {
  const Header = () => <div data-testid="header">Header Mock</div>;
  return Header;
});

jest.mock("../../components/SearchBar", () => {
  const SearchBar = ({ onSearch }) => (
    <input
      data-testid="search-input"
      onChange={(e) => onSearch && onSearch(e.target.value)}
    />
  );
  return SearchBar;
});

jest.mock("../../components/SearchResults", () => {
  const SearchResults = () => (
    <div data-testid="search-results">SearchResults Mock</div>
  );
  return SearchResults;
});

jest.mock("../../components/Library", () => {
  const Library = () => <div data-testid="library">Library Mock</div>;
  return Library;
});

jest.mock("../../components/SongDetails", () => {
  const SongDetails = () => (
    <div data-testid="song-details">SongDetails Mock</div>
  );
  return SongDetails;
});

// Mock del hook useFetchSongs
jest.mock("../../hooks/useFetchSongs", () => ({
  __esModule: true,
  default: () => ({
    data: null,
    error: null,
    handleSearch: jest.fn(),
  }),
}));

describe("App Component Tests", () => {
  const setup = () => {
    const store = configureStore({
      reducer: {
        library: libraryReducer,
      },
    });

    return render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render Header component", () => {
    setup();
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should render SearchBar component", () => {
    setup();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  it("should render Library component", () => {
    setup();
    expect(screen.getByTestId("library")).toBeInTheDocument();
  });
});
