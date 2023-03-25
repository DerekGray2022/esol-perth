import { render, screen } from "@testing-library/react";

import IELTS from "../pages/Ielts";

////        HEADINGS        ///////////////////////////////
describe("Headings", () => {
  // Page Header
  test("should render Page header", () => {
    render(<IELTS />);

    const pageHeader = screen.getByRole("heading", {
      level: 1,
      name: /^I E L T S/i,
    });
    expect(pageHeader).toBeInTheDocument();
  });

  // Ielts Book Header
  test("should render Ielts Book header", () => {
    render(<IELTS />);

    const ieltsHeader = screen.getByRole("heading", {
      level: 4,
      name: /^international/i,
    });
    expect(ieltsHeader).toBeInTheDocument();
  });

  // Ielts Book ISBN Header
  test("should render Ielts Book ISBN header", () => {
    render(<IELTS />);

    const isbnHeader = screen.getByRole("heading", {
      level: 5,
      name: /620698$/i,
    });
    expect(isbnHeader).toBeInTheDocument();
  });
});

////        ISBN LINKS WORK        ////////////////////////////////////
describe("ISBN Link Works", () => {
  // Ielts Book Link Triggers
  test("Ielts Book ISBN link should work", async () => {
    render(<IELTS />);

    const isbnLink = screen.getByRole("link", {
      name: /620698$/i,
    });
    expect(isbnLink).toHaveAttribute(
      "href",
      "https://www.amazon.co.uk/Official-Cambridge-Students-Answers-DVD-ROM/dp/1107620694/ref=asc_df_1107620694/?tag=googshopuk-21&linkCode=df0&hvadid=310977298937&hvpos=&hvnetw=g&hvrand=7237135544404518703&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9046888&hvtargid=pla-450493603327&psc=1"
    );
  });
});

////        IMAGE        //////////////////////////////////////////
describe("Image", () => {
  // Ielts Book Image
  test("should render Ielts Book Image", () => {
    render(<IELTS />);

    const ieltsImg = screen.getByRole("img", {
      name: /ielts/i,
    });
    expect(ieltsImg).toBeInTheDocument();
  });
});

////        PARAGRAPHS        ////////////////////////////////////
describe("Paragraphs", () => {
  // Ielts Book Paragraph
  test("should render the Ielts Book Paragraph 01", () => {
    render(<IELTS />);

    const ieltsPara = screen.getByText(/^This is a required qualification/i);
    expect(ieltsPara).toBeInTheDocument();
  });

  // Ielts Book Paragraph
  test("should render the Ielts Book Paragraph 02", () => {
    render(<IELTS />);

    const ieltsPara = screen.getByText(/^IELTS is divided/i);
    expect(ieltsPara).toBeInTheDocument();
  });
});
