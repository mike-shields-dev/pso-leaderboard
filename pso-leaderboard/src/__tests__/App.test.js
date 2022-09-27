import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

const renderApp = () => render(<App />, { wrapper: BrowserRouter });

describe("App", () => {
  it("matches snapshot", () => {
    const { asFragment } = renderApp();

    expect(asFragment()).toMatchSnapshot();
  });
});
