import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";

const renderHome = () => render(<Home />, { wrapper: BrowserRouter });

describe("Home", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderHome();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders hyperlinks to '/display' and '/editor'", () => {
    renderHome();

    expect(screen.getByRole("link", { name: /display/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /editor/i })).toBeInTheDocument();
  });
});
