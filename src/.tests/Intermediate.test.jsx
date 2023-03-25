import { render, screen } from "@testing-library/react";

import Intermediate from "../pages/Intermediate";

////        HEADINGS        /////////////////////////////////////////
describe("Headings", () => {
  // Page Header
  test("should render Page header", () => {
    render(<Intermediate />);

    const pageHeader = screen.getByRole("heading", {
      level: 1,
      name: /^intermediate/i,
    });
    expect(pageHeader).toBeInTheDocument();
  });

  // Green Book Header
  test("should render Green Book header", () => {
    render(<Intermediate />);

    const greenHeader = screen.getByRole("heading", {
      level: 4,
      name: /Green/i,
    });
    expect(greenHeader).toBeInTheDocument();
  });

  // Green Book ISBN Header
  test("should render Green Book ISBN header", () => {
    render(<Intermediate />);

    const isbnHeader = screen.getByRole("heading", {
      level: 5,
      name: /226063$/i,
    });
    expect(isbnHeader).toBeInTheDocument();
  });
});

////        ISBN LINKS WORK        ////////////////////////////////////
describe("ISBN Link Works", () => {
  // Green Book Link Triggers
  test("Green Book ISBN link should work", async () => {
    render(<Intermediate />);

    const isbnLink = screen.getByRole("link", {
      name: /226063$/i,
    });
    expect(isbnLink).toHaveAttribute(
      "href",
      "https://www.dk.com/uk/book/9780241226063-english-for-everyone-course-book-level-3-intermediate/"
    );
  });
});

////        IMAGE        /////////////////////////////////////////////
describe("Image", () => {
  // Green Book Image
  test("should render Green Book Image", () => {
    render(<Intermediate />);

    const greenImg = screen.getByRole("img", {
      name: /green/i,
    });
    expect(greenImg).toBeInTheDocument();
  });
});

////        PARAGRAPHS        ////////////////////////////////////
describe("Paragraphs", () => {
  // Green Book Paragraph
  test("should render the Green Book Paragraph", () => {
    render(<Intermediate />);

    const greenPara = screen.getByText(/solid foundation in English/i);
    expect(greenPara).toBeInTheDocument();
  });
});
