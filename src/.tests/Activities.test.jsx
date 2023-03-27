import { render, screen } from "@testing-library/react";

import Activities from "../pages/Activities";

////        SPLASH DIVISION        ///////////////////////
describe("Splash Division", () => {
  // Splash Division
  test("should render Splash Division", () => {
    render(<Activities />);

    const splashDiv = screen.getByTestId(/splash/);
    expect(splashDiv).toBeInTheDocument();
  });

  // Splash Division has Background Image
  test("Splash Division has Background Image", () => {
    render(<Activities />);

    const splashDiv = screen.getByTestId(/splash/);
    expect(splashDiv).toHaveStyle({
      backgroundImage: "",
    });
  });
});

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

////        PARAGRAPHS        ////////////////////////////
describe("Paragraphs", () => {
  // Paragraphs
  test("Number of Paragraphs should = 23", () => {
    render(<Activities />);

    const paragraphs = screen.getAllByTestId(/para/i);
    expect(paragraphs).toHaveLength(23);
  });
});

////        ACTIVITY CARDS        /////////////////////////
describe("Activity Cards", () => {
  // internationalCafé
  test("should render internationalCafé div", () => {
    render(<Activities />);

    const internationalCaféDiv = screen.getByTestId("div00");
    expect(internationalCaféDiv).toBeInTheDocument();
  });

  // internationalCafé div has BG Image
  test("internationalCafé div has BG Image", () => {
    render(<Activities />);

    const internationalCaféDiv = screen.getByTestId("div00");
    expect(internationalCaféDiv).toHaveStyle({
      backgroundImage: "",
    });
  });

  // daytrips
  test("should render daytrips div", () => {
    render(<Activities />);

    const daytripsDiv = screen.getByTestId("div01");
    expect(daytripsDiv).toBeInTheDocument();
  });

  // daytrips div has BG Image
  test("daytrips div has BG Image", () => {
    render(<Activities />);

    const daytripsDiv = screen.getByTestId("div01");
    expect(daytripsDiv).toHaveStyle({
      backgroundImage: "",
    });
  });

  // cityWalks
  test("should render cityWalks div", () => {
    render(<Activities />);

    const cityWalksDiv = screen.getByTestId("div02");
    expect(cityWalksDiv).toBeInTheDocument();
  });

  // cityWalks div has BG Image
  test("cityWalks div has BG Image", () => {
    render(<Activities />);

    const cityWalksDiv = screen.getByTestId("div02");
    expect(cityWalksDiv).toHaveStyle({
      backgroundImage: "",
    });
  });

  // chessClub
  test("should render chessClub div", () => {
    render(<Activities />);

    const chessClub = screen.getByTestId("div03");
    expect(chessClub).toBeInTheDocument();
  });

  // chessClub div has BG Image
  test("chessClub div has BG Image", () => {
    render(<Activities />);

    const chessClubDiv = screen.getByTestId("div03");
    expect(chessClubDiv).toHaveStyle({
      backgroundImage: "",
    });
  });

  // speakersClub
  test("should render speakersClub div", () => {
    render(<Activities />);

    const speakersClub = screen.getByTestId("div04");
    expect(speakersClub).toBeInTheDocument();
  });

  // speakersClub div has BG Image
  test("speakersClub div has BG Image", () => {
    render(<Activities />);

    const speakersClubDiv = screen.getByTestId("div04");
    expect(speakersClubDiv).toHaveStyle({
      backgroundImage: "",
    });
  });

  // holidayClub
  test("should render holidayClub div", () => {
    render(<Activities />);

    const holidayClub = screen.getByTestId("div05");
    expect(holidayClub).toBeInTheDocument();
  });

  // holidayClub div has BG Image
  test("holidayClub div has BG Image", () => {
    render(<Activities />);

    const holidayClubDiv = screen.getByTestId("div05");
    expect(holidayClubDiv).toHaveStyle({
      backgroundImage: "",
    });
  });

  // tableTennis
  test("should render tableTennis div", () => {
    render(<Activities />);

    const tableTennis = screen.getByTestId("div06");
    expect(tableTennis).toBeInTheDocument();
  });

  // tableTennis div has BG Image
  test("tableTennis div has BG Image", () => {
    render(<Activities />);

    const tableTennisDiv = screen.getByTestId("div06");
    expect(tableTennisDiv).toHaveStyle({
      backgroundImage: "",
    });
  });

  // summerSchool
  test("should render summerSchool div", () => {
    render(<Activities />);

    const summerSchool = screen.getByTestId("div07");
    expect(summerSchool).toBeInTheDocument();
  });

  // summerSchool div has BG Image
  test("summerSchool div has BG Image", () => {
    render(<Activities />);

    const summerSchoolDiv = screen.getByTestId("div07");
    expect(summerSchoolDiv).toHaveStyle({
      backgroundImage: "",
    });
  });

  // toddlerGroup
  test("should render toddlerGroup div", () => {
    render(<Activities />);

    const toddlerGroup = screen.getByTestId("div08");
    expect(toddlerGroup).toBeInTheDocument();
  });

  // toddlerGroup div has BG Image
  test("toddlerGroup div has BG Image", () => {
    render(<Activities />);

    const toddlerGroupDiv = screen.getByTestId("div08");
    expect(toddlerGroupDiv).toHaveStyle({
      backgroundImage: "",
    });
  });
});
