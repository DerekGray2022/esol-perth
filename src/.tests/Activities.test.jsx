import { render, screen } from "@testing-library/react";

import Activities from "../pages/Activities";

////        HEADINGS        ///////////////////////////////
describe("Headings", () => {
  // Page Header
  test("should render Page header", () => {
    render(<Activities />);

    const pageHeader = screen.getByRole("heading", {
      level: 1,
      name: /^Activities/i,
    });
    expect(pageHeader).toBeInTheDocument();
  });

  // Activity Headers
  test("should render Activity headers", () => {
    render(<Activities />);
    // Internaltional Café
    const cafeHeader = screen.getByRole("heading", {
      level: 2,
      name: /^International Café/i,
    });
    expect(cafeHeader).toBeInTheDocument();

    // Daytrips
    const dayTripsHeader = screen.getByRole("heading", {
      level: 2,
      name: /^Daytrips/i,
    });
    expect(dayTripsHeader).toBeInTheDocument();

    // City Walks
    const cityWalksHeader = screen.getByRole("heading", {
      level: 2,
      name: /^City Walks/i,
    });
    expect(cityWalksHeader).toBeInTheDocument();

    // Perth Chess Club
    const chessClubHeader = screen.getByRole("heading", {
      level: 2,
      name: /^Perth Chess Club/i,
    });
    expect(chessClubHeader).toBeInTheDocument();

    // Perth Speakers Club
    const speakersClubHeader = screen.getByRole("heading", {
      level: 2,
      name: /^Perth Speakers Club/i,
    });
    expect(speakersClubHeader).toBeInTheDocument();

    // Children's Holiday Club
    const holidayClubHeader = screen.getByRole("heading", {
      level: 2,
      name: /^Children's Holiday Club/i,
    });
    expect(holidayClubHeader).toBeInTheDocument();

    //   Table Tennis Club
    const tableTennisHeader = screen.getByRole("heading", {
      level: 2,
      name: /^Table Tennis Club/i,
    });
    expect(tableTennisHeader).toBeInTheDocument();

    //   July Summer School
    const summerSchoolHeader = screen.getByRole("heading", {
      level: 2,
      name: /^July Summer School/i,
    });
    expect(summerSchoolHeader).toBeInTheDocument();

    //   Esolperth Toddler Group
    const toddlerGroupHeader = screen.getByRole("heading", {
      level: 2,
      name: /^Esolperth Toddler Group/i,
    });
    expect(toddlerGroupHeader).toBeInTheDocument();
  });

  test("should render Intro subHead", () => {
    render(<Activities />);

    const subHead = screen.getByRole("heading", {
      name: /^Each week our volunteers/i,
    });
  });
});

////        SOCIAL MEDIA STRAPLINES     /////////////////
describe("Social Media Straplines", () => {
  // Facebook Strapline
  test("should render Facebook strapline", () => {
    render(<Activities />);

    const facebook = screen.getByRole("heading", {
      name: /facebook/i,
    });
    expect(facebook).toBeInTheDocument();
  });

  // Instagram Strapline
  test("should render Instagram strapline", () => {
    render(<Activities />);

    const instagram = screen.getByRole("heading", {
      name: /instagram/i,
    });
    expect(instagram).toBeInTheDocument();
  });
});

////        LINKS WORK        //////////////////////////
describe("Links", () => {
  // Facebook Link
  test("Facebook link should work", () => {
    render(<Activities />);

    const facebookLink = screen.getByRole("link", {
      name: /Facebook/i,
    });
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/search/top?q=esolperth"
    );
  });

  // Instagram Link
  test("Instagram link should work", () => {
    render(<Activities />);

    const instagramLink = screen.getByRole("link", {
      name: /Instagram/i,
    });
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/explore/locations/389478557923021/esolperth/"
    );
  });
});

////        PARAGRAPHS        ///////////////////////////////
describe("Paragraphs", () => {
  // Paragraphs
  test("Number of Paragraphs should = 23", () => {
    render(<Activities />);

    const paragraphs = screen.getAllByTestId(/para/i);
    expect(paragraphs).toHaveLength(23);
  });
});

////        ACTIVITY CARDS        ///////////////////////////////
describe("Activity Cards", () => {
  // International Café
  test("should render café div", () => {
    render(<Activities />);

    const internationalDiv = screen.getByTestId("div00");
    expect(internationalDiv).toBeInTheDocument();
  });

  // Daytrips
  test("should render daytrips div", () => {
    render(<Activities />);

    const daytripsDiv = screen.getByTestId("div01");
    expect(daytripsDiv).toBeInTheDocument();
  });

  // cityWalks
  test("should render cityWalks div", () => {
    render(<Activities />);

    const cityWalksDiv = screen.getByTestId("div02");
    expect(cityWalksDiv).toBeInTheDocument();
  });

  // chessClub
  test("should render chessClub div", () => {
    render(<Activities />);

    const chessClub = screen.getByTestId("div03");
    expect(chessClub).toBeInTheDocument();
  });

  // speakersClub
  test("should render speakersClub div", () => {
    render(<Activities />);

    const speakersClub = screen.getByTestId("div04");
    expect(speakersClub).toBeInTheDocument();
  });

  // holidayClub
  test("should render holidayClub div", () => {
    render(<Activities />);

    const holidayClub = screen.getByTestId("div05");
    expect(holidayClub).toBeInTheDocument();
  });

  // tableTennis
  test("should render tableTennis div", () => {
    render(<Activities />);

    const tableTennis = screen.getByTestId("div06");
    expect(tableTennis).toBeInTheDocument();
  });

  // summerSchool
  test("should render summerSchool div", () => {
    render(<Activities />);

    const summerSchool = screen.getByTestId("div07");
    expect(summerSchool).toBeInTheDocument();
  });

  // toddlerGroup
  test("should render toddlerGroup div", () => {
    render(<Activities />);

    const toddlerGroup = screen.getByTestId("div08");
    expect(toddlerGroup).toBeInTheDocument();
  });
});
