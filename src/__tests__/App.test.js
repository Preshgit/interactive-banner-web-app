import { render, screen } from "@testing-library/react";
import App from "../App";

import React from "react";

import { test, expect } from "@jest/globals";

test("renders the app component", () => {
  render(<App />);
  const header = screen.getByText("Customize Your Banner");
  expect(header).toBeInTheDocument();
});
