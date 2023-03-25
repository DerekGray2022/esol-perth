import { render, screen } from "@testing-library/react";

import Contact from "../pages/Contact";

////        HEADING        ////////////////////////
describe("Headings", () => {
  // Page Header
  test("should render Page Header", () => {
    render(<Contact />);

    const pageHeader = screen.getByRole("heading", {
      level: 2,
      name: /location/i,
    });
    expect(pageHeader).toBeInTheDocument();
  });
});

////        IMAGE        ////////////////////////
describe("Map Image", () => {
  test("should render Map Image", () => {
    render(<Contact />);

    const mapImg = screen.getByRole("img", {
      name: /map/i,
    });
    expect(mapImg).toBeInTheDocument();
  });
});

////        PARAGRAPHS        ////////////////////////
describe("Paragraphs", () => {
  // Paragraph00
  test("should render Paragraph00", () => {
    render(<Contact />);

    const paragraph00 = screen.getByText(/Drummond House/i);
    expect(paragraph00).toBeInTheDocument();
  });

  // Paragraph01
  test("should render Paragraph01", () => {
    render(<Contact />);

    const paragraph01 = screen.getByText(/Please get in touch/i);
    expect(paragraph01).toBeInTheDocument();
  });

  // Paragraph02
  test("should render Paragraph02", () => {
    render(<Contact />);

    const paragraph02 = screen.getByText(/from outside the UK/i);
    expect(paragraph02).toBeInTheDocument();
  });

  // Paragraph03
  test("should render Paragraph03", () => {
    render(<Contact />);

    const paragraph03 = screen.getByText(/in the UK/i);
    expect(paragraph03).toBeInTheDocument();
  });

  // Paragraph04
  test("should render Paragraph04", () => {
    render(<Contact />);

    const paragraph04 = screen.getByText(/email/i);
    expect(paragraph04).toBeInTheDocument();
  });

  // Paragraph05
  test("should render Paragraph05", () => {
    render(<Contact />);

    const paragraph05 = screen.getByText(/What3words/i);
    expect(paragraph05).toBeInTheDocument();
  });
});
