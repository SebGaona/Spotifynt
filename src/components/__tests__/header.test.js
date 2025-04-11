import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe("Header Component", () => {
  it("renderiza el texto del título", () => {
    render(<Header />);
    expect(screen.getByText("Spotifyn't")).toBeInTheDocument();
  });

  it("tiene la estructura HTML esperada", () => {
    const { container } = render(<Header />);

    const header = container.firstChild;
    expect(header.tagName).toBe("HEADER");

    const title = header.firstChild;
    expect(title.tagName).toBe("A");
    expect(title.textContent).toBe("Spotifyn't");
  });
});
