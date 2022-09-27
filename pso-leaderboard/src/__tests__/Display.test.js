import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Display from "../components/Display";

const renderDisplay = () => render(<Display />, { wrapper: BrowserRouter });

describe("Display", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderDisplay();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders hyperlinks to '/home' and '/editor'", () => {
    renderDisplay();

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /editor/i })).toBeInTheDocument();
  });
});
