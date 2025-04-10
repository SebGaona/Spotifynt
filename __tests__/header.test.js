import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../src/components/Header";

describe("Header component", () => {
  it("renders correctly and contains expected content", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const titleElement = screen.getByText(/Spotifyn't/i);
    expect(titleElement).toBeInTheDocument();

    expect(titleElement.closest("a")).toHaveAttribute("href", "/");
  });
});
