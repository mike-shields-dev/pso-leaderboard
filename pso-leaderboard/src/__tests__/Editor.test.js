import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Editor from "../components/Editor";

const renderEditor = () => render(<Editor />, { wrapper: BrowserRouter });

describe("Editor", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderEditor();

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders hyperlinks to '/home' and '/display'", () => {
    renderEditor();

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /display/i })).toBeInTheDocument();
  });
});
