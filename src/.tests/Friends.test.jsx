import { render, screen } from "@testing-library/react";

import Friends from "../pages/Friends";

////        HEADINGS        //////////////////////////////
describe("Headings", () => {
  ////        H1      ////
  // Page Header
  test("should render Page Header", () => {
    render(<Friends />);

    const pageHeader = screen.getByRole("heading", {
      level: 1,
      name: /friends/i,
    });
    expect(pageHeader).toBeInTheDocument();
  });

  ////        H5      ////
  // Page Subheader
  test("should render Page Subheader", () => {
    render(<Friends />);

    const pageSubheader = screen.getByRole("heading", {
      level: 5,
      name: /partnerships/i,
    });
    expect(pageSubheader).toBeInTheDocument();
  });

  ////        H5      ////
  // Comments Header
  test("should render functioning Comments", () => {
    render(<Friends />);

    const commentsHeader = screen.getByRole("heading", {
      level: 3,
      name: /comments/i,
    });
    expect(commentsHeader).toBeInTheDocument();
  });
});

////        PARTNER LIST        /////////////////////////
describe("Partners: Header, Image & Functional Link", () => {
  // Buttons & Bows
  test("should render functioning Buttons & Bows", () => {
    render(<Friends />);

    //   Header
    const buttonsHeader = screen.getByRole("heading", {
      level: 5,
      name: /buttons/i,
    });
    //   Image
    const buttonsImg = screen.getByRole("img", {
      name: /buttons/i,
    });
    //   Link
    const buttonsLink = screen.getByRole("link", {
      name: /buttons/i,
    });

    expect(buttonsHeader).toBeInTheDocument();
    expect(buttonsImg).toBeInTheDocument();
    expect(buttonsLink).toHaveAttribute("href", "https://perthbabybank.org/");
  });

  // Letham Football Club
  test("should render functioning Letham FC", () => {
    render(<Friends />);

    //   Header
    const lethamHeader = screen.getByRole("heading", {
      level: 5,
      name: /letham/i,
    });
    //   Image
    const lethamImg = screen.getByRole("img", {
      name: /letham/i,
    });
    //   Link
    const lethamLink = screen.getByRole("link", {
      name: /letham/i,
    });

    expect(lethamHeader).toBeInTheDocument();
    expect(lethamImg).toBeInTheDocument();
    expect(lethamLink).toHaveAttribute("href", "https://lethamfc.co.uk/");
  });

  // OSCR
  test("should render functioning OSCR", () => {
    render(<Friends />);

    //   Header
    const oscrHeader = screen.getByRole("heading", {
      level: 5,
      name: /oscr/i,
    });
    //   Image
    const oscrImg = screen.getByRole("img", {
      name: /oscr/i,
    });
    //   Link
    const oscrLink = screen.getByRole("link", {
      name: /oscr/i,
    });

    expect(oscrHeader).toBeInTheDocument();
    expect(oscrImg).toBeInTheDocument();
    expect(oscrLink).toHaveAttribute("href", "https://www.oscr.org.uk/");
  });

  // Perth Museum
  test("should render functioning Perth Museum", () => {
    render(<Friends />);

    //   Header
    const museumHeader = screen.getByRole("heading", {
      level: 5,
      name: /museum/i,
    });
    //   Image
    const museumImg = screen.getByRole("img", {
      name: /museum/i,
    });
    //   Link
    const museumLink = screen.getByRole("link", {
      name: /museum/i,
    });

    expect(museumHeader).toBeInTheDocument();
    expect(museumImg).toBeInTheDocument();
    expect(museumLink).toHaveAttribute(
      "href",
      "http://www.culturepk.org.uk/museums-and-galleries/perth-museum-and-art-gallery/"
    );
  });

  // Perth Playhouse
  test("should render functioning Perth Playhouse", () => {
    render(<Friends />);

    //   Header
    const playhouseHeader = screen.getByRole("heading", {
      level: 5,
      name: /playhouse/i,
    });
    //   Image
    const playhouseImg = screen.getByRole("img", {
      name: /playhouse/i,
    });
    //   Link
    const playhouseLink = screen.getByRole("link", {
      name: /playhouse/i,
    });

    expect(playhouseHeader).toBeInTheDocument();
    expect(playhouseImg).toBeInTheDocument();
    expect(playhouseLink).toHaveAttribute(
      "href",
      "https://theperthplayhouse.co.uk/"
    );
  });

  // Perth Theatre
  test("should render functioning Perth Theatre", () => {
    render(<Friends />);

    //   Header
    const theatreHeader = screen.getByRole("heading", {
      level: 5,
      name: /theatre/i,
    });
    //   Image
    const theatreImg = screen.getByRole("img", {
      name: /theatre/i,
    });
    //   Link
    const theatreLink = screen.getByRole("link", {
      name: /theatre/i,
    });

    expect(theatreHeader).toBeInTheDocument();
    expect(theatreImg).toBeInTheDocument();
    expect(theatreLink).toHaveAttribute(
      "href",
      "https://www.horsecross.co.uk/"
    );
  });

  // Police Scotland
  test("should render functioning Police Scotland", () => {
    render(<Friends />);

    //   Header
    const policeHeader = screen.getByRole("heading", {
      level: 5,
      name: /police/i,
    });
    //   Image
    const policeImg = screen.getByRole("img", {
      name: /police/i,
    });
    //   Link
    const policeLink = screen.getByRole("link", {
      name: /police/i,
    });

    expect(policeHeader).toBeInTheDocument();
    expect(policeImg).toBeInTheDocument();
    expect(policeLink).toHaveAttribute(
      "href",
      "http://www.scotland.police.uk/your-community/tayside/perth-and-kinross/"
    );
  });

  // RASAC
  test("should render functioning RASAC", () => {
    render(<Friends />);

    //   Header
    const rasacHeader = screen.getByRole("heading", {
      level: 5,
      name: /rasac/i,
    });
    //   Image
    const rasacImg = screen.getByRole("img", {
      name: /rasac/i,
    });
    //   Link
    const rasacLink = screen.getByRole("link", {
      name: /rasac/i,
    });

    expect(rasacHeader).toBeInTheDocument();
    expect(rasacImg).toBeInTheDocument();
    expect(rasacLink).toHaveAttribute("href", "https://www.rasacpk.org.uk/");
  });

  // Scottish Tech Army
  test("should render functioning Scottish Tech Army", () => {
    render(<Friends />);

    //   Header
    const techHeader = screen.getByRole("heading", {
      level: 5,
      name: /tech/i,
    });
    //   Image
    const techImg = screen.getByRole("img", {
      name: /tech/i,
    });
    //   Link
    const techLink = screen.getByRole("link", {
      name: /tech/i,
    });

    expect(techHeader).toBeInTheDocument();
    expect(techImg).toBeInTheDocument();
    expect(techLink).toHaveAttribute(
      "href",
      "https://www.scottishtecharmy.org/"
    );
  });

  // SCVO
  test("should render functioning SCVO", () => {
    render(<Friends />);

    //   Header
    const scvoHeader = screen.getByRole("heading", {
      level: 5,
      name: /scvo/i,
    });
    //   Image
    const scvoImg = screen.getByRole("img", {
      name: /scvo/i,
    });
    //   Link
    const scvoLink = screen.getByRole("link", {
      name: /scvo/i,
    });

    expect(scvoHeader).toBeInTheDocument();
    expect(scvoImg).toBeInTheDocument();
    expect(scvoLink).toHaveAttribute("href", "https://scvo.scot/");
  });
});

////        COMMENTS DIVISION        /////////////////////
describe("Comments Division", () => {
  test("should render Comments Division", () => {
    render(<Friends />);

    const commentsDiv = screen.getByTestId(/comments/i);
    expect(commentsDiv).toBeInTheDocument();
  });
});

////        COMMENTS        /////////////////////////
describe("Past Students' Comments", () => {
  // Comment00
  test("should render comment00", () => {
    render(<Friends />);

    const comment00 = screen.getByText(/I thank you/i);
    expect(comment00).toBeInTheDocument();
  });

  // Comment01
  test("should render comment01", () => {
    render(<Friends />);

    const comment01 = screen.getByText(/I really liked the warm welcome/i);
    expect(comment01).toBeInTheDocument();
  });

  // Comment02
  test("should render comment02", () => {
    render(<Friends />);

    const comment02 = screen.getByText(/Thank you so much/i);
    expect(comment02).toBeInTheDocument();
  });

  // Comment03
  test("should render comment03", () => {
    render(<Friends />);

    const comment03 = screen.getByText(/I really liked the trip/i);
    expect(comment03).toBeInTheDocument();
  });

  // Comment04
  test("should render comment04", () => {
    render(<Friends />);

    const comment04 = screen.getByText(/What was good/i);
    expect(comment04).toBeInTheDocument();
  });

  // Comment05
  test("should render comment05", () => {
    render(<Friends />);

    const comment05 = screen.getByText(/Good teachers, good books/i);
    expect(comment05).toBeInTheDocument();
  });
});
