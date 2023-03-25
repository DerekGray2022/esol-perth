import { render, screen } from "@testing-library/react";

import Advanced from "../pages/Advanced";

////        HEADINGS        ///////////////////////////////
describe("Headings", () => {
  // Page Header
  test("should render Page header", () => {
    render(<Advanced />);

    const pageHeader = screen.getByRole("heading", {
      level: 1,
      name: /^advanced/i,
    });
    expect(pageHeader).toBeInTheDocument();
  });

  // Blue Book Header
  test("should render Blue Book header", () => {
    render(<Advanced />);

    const blueHeader = screen.getByRole("heading", {
      level: 4,
      name: /Blue/i,
    });
    expect(blueHeader).toBeInTheDocument();
  });

  // Blue Book ISBN Header
  test("should render Blue Book ISBN header", () => {
    render(<Advanced />);

    const isbnHeader = screen.getByRole("heading", {
      level: 5,
      name: /242322$/i,
    });
    expect(isbnHeader).toBeInTheDocument();
  });
});

////        ISBN LINKS WORK        ////////////////////////////////////
describe("ISBN Link Works", () => {
  // Blue Book Link Triggers
  test("Blue Book ISBN link should work", async () => {
    render(<Advanced />);

    const isbnLink = screen.getByRole("link", {
      name: /242322$/i,
    });
    expect(isbnLink).toHaveAttribute(
      "href",
      "https://www.dk.com/uk/book/9780241242322-english-for-everyone-course-book-level-4-advanced/"
    );
  });
});

////        IMAGE        /////////////////////////////////////////////
describe("Image", () => {
  // Blue Book Image
  test("should render Blue Book Image", () => {
    render(<Advanced />);

    const blueImg = screen.getByRole("img", {
      name: /blue/i,
    });
    expect(blueImg).toBeInTheDocument();
  });
});

////        PARAGRAPHS        ////////////////////////////////////
describe("Paragraphs", () => {
  // Blue Book Paragraph
  test("should render the Blue Book Paragraph", () => {
    render(<Advanced />);

    const bluePara = screen.getByText(/good language ability/i);
    expect(bluePara).toBeInTheDocument();
  });
});
