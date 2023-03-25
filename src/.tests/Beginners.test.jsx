import { render, screen } from "@testing-library/react";

import Beginners from "../pages/Beginners";

////        HEADINGS        /////////////////////////////////////////
describe("Headings", () => {
  // Page Header
  test("should render Page header", () => {
    render(<Beginners />);

    const pageHeader = screen.getByRole("heading", {
      level: 1,
      name: /^beginner/i,
    });
    expect(pageHeader).toBeInTheDocument();
  });

  // Red Book Header
  test("should render Red Book header", () => {
    render(<Beginners />);

    const redHeader = screen.getByRole("heading", {
      level: 4,
      name: /Red/i,
    });
    expect(redHeader).toBeInTheDocument();
  });

  // Orange Book Header
  test("should render Orange Book header", () => {
    render(<Beginners />);

    const pageHeader = screen.getByRole("heading", {
      level: 4,
      name: /Orange/i,
    });
    expect(pageHeader).toBeInTheDocument();
  });

  // Red Book ISBN Header
  test("should render Red Book ISBN header", () => {
    render(<Beginners />);

    const isbnHeader = screen.getByRole("heading", {
      level: 5,
      name: /226315$/i,
    });
    expect(isbnHeader).toBeInTheDocument();
  });

  // Orange Book ISBN Header
  test("should render Orange Book ISBN header", () => {
    render(<Beginners />);

    const isbnHeader = screen.getByRole("heading", {
      level: 5,
      name: /252697$/i,
    });
    expect(isbnHeader).toBeInTheDocument();
  });
});

////        ISBN LINKS WORK        ////////////////////////////////////
describe("ISBN Links Work", () => {
  // Red Book Link Triggers
  test("Red Book ISBN link should work", async () => {
    render(<Beginners />);

    const isbnLink = screen.getByRole("link", {
      name: /226315/i,
    });
    expect(isbnLink).toHaveAttribute(
      "href",
      "https://www.dk.com/uk/book/9780241226315-english-for-everyone-course-book-level-1-beginner/"
    );
  });

  // Orange Book Link Triggers
  test("Orange Book ISBN link should work", async () => {
    render(<Beginners />);

    const isbnLink = screen.getByRole("link", {
      name: /252697/i,
    });
    expect(isbnLink).toHaveAttribute(
      "href",
      "https://www.dk.com/uk/book/9780241252697-english-for-everyone-course-book-level-2-beginner/"
    );
  });
});

////        IMAGE        /////////////////////////////////////////////
describe("Images", () => {
  // Red Book Image
  test("should render Red Book Image", () => {
    render(<Beginners />);

    const redImg = screen.getByRole("img", {
      name: /Red/i,
    });
    expect(redImg).toBeInTheDocument();
  });

  // Orange Book Image
  test("should render Orange Book Image", () => {
    render(<Beginners />);

    const orangeImg = screen.getByRole("img", {
      name: /Orange/i,
    });
    expect(orangeImg).toBeInTheDocument();
  });
});

////        PARAGRAPHS        ////////////////////////////////////
describe("Paragraphs", () => {
  // Red Book Paragraph
  test("should render the Red Book Paragraph", () => {
    render(<Beginners />);

    const redPara = screen.getByText(/starting to learn English/i);
    expect(redPara).toBeInTheDocument();
  });

  // Orange Book Paragraph
  test("should render the Orange Book Paragraph", () => {
    render(<Beginners />);

    const orangePara = screen.getByText(/use English independently/i);
    expect(orangePara).toBeInTheDocument();
  });
});
