import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../../components/banner";
import "@testing-library/jest-dom"; // Import jest-dom for better assertions
import { test, expect } from "@jest/globals";

test("renders Banner component with default props", () => {
  render(<Banner bannerConfig={{}} />);

  // Check if the title is rendered with the default value
  const titleElement = screen.getByText("Popular Types of Dogs");
  expect(titleElement).toBeInTheDocument();

  // Check if the description is rendered with the default value
  const descriptionElement = screen.getByText(
    "Discover amazing dog breeds that make perfect companions. From loyal Labradors to playful Beagles."
  );
  expect(descriptionElement).toBeInTheDocument();

  // Check if the button text is rendered with the default value
  const buttonElement = screen.getByText("Learn More");
  expect(buttonElement).toBeInTheDocument();
});

test("renders Banner component with custom props", () => {
  const bannerConfig = {
    title: "Custom Title",
    description: "Custom Description",
    buttonText: "Custom Button Text",
    backgroundColor: "red",
    imageURL: "http://example.com/image.jpg",
  };

  render(<Banner bannerConfig={bannerConfig} />);

  // Check if the title is rendered with the custom value
  const titleElement = screen.getByText("Custom Title");
  expect(titleElement).toBeInTheDocument();

  // Check if the description is rendered with the custom value
  const descriptionElement = screen.getByText("Custom Description");
  expect(descriptionElement).toBeInTheDocument();

  // Check if the button text is rendered with the custom value
  const buttonElement = screen.getByText("Custom Button Text");
  expect(buttonElement).toBeInTheDocument();
});
