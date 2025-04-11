import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import SearchBar from "../SearchBar";
import "@testing-library/jest-dom";

const mockTheme = {
  colors: {
    background: "#ffffff",
    primary: "#1db954",
    secondary: "#191414",
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },
  sizes: {
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    padding: {
      small: "8px",
      medium: "16px",
    },
  },
};

describe("SearchBar Component", () => {
  const mockOnSearch = jest.fn();
  const placeholderText = "Busca un artista";
  const buttonText = "Buscar";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderSearchBar = () => {
    return render(
      <ThemeProvider theme={mockTheme}>
        <SearchBar onSearch={mockOnSearch} />
      </ThemeProvider>
    );
  };

  it("should render correctly with all expected elements", () => {
    renderSearchBar();

    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: buttonText })
    ).toBeInTheDocument();

    const formElement = screen.getByTestId("search-form");
    expect(formElement).toBeInTheDocument();
  });

  it("should allow user to type in the input field", () => {
    renderSearchBar();

    const inputElement = screen.getByPlaceholderText(placeholderText);
    const testValue = "Test Artist";

    fireEvent.change(inputElement, { target: { value: testValue } });

    expect(inputElement).toHaveValue(testValue);
  });

  it("should call onSearch with input value when search button is clicked", () => {
    renderSearchBar();

    const inputElement = screen.getByPlaceholderText(placeholderText);
    const buttonElement = screen.getByRole("button", { name: buttonText });
    const testValue = "Test Artist";

    fireEvent.change(inputElement, { target: { value: testValue } });
    fireEvent.click(buttonElement);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith(testValue);
  });

  it("should not call onSearch when input is empty and button is clicked", () => {
    renderSearchBar();

    const buttonElement = screen.getByRole("button", { name: buttonText });
    fireEvent.click(buttonElement);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });

  it("should prevent default form submission behavior", () => {
    renderSearchBar();

    const formElement = screen.getByTestId("search-form");
    const submitEvent = new Event("submit", {
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = jest.spyOn(submitEvent, "preventDefault");

    fireEvent(formElement, submitEvent);

    expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
  });
});
