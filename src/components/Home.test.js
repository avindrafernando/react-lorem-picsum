import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

it("should render a heading", () => {
  render(<Home />);
  expect(screen.getByText("Welcome to My Featured Posts")).toBeVisible();
});
