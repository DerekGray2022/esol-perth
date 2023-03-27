import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../components/Header";

//      NAV BAR      ///////////////////////////////////////////
describe("Navigation Bar", () => {
  test("should render the Nav Bar", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });
});

//      IMAGES      ///////////////////////////////////////////
describe("Images", () => {
  test("should render the Logo Image", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const logoImage = screen.getByRole("img", {
      name: /logo/i,
    });
    expect(logoImage).toBeInTheDocument();
  });
});

//      NAVIGATION LINKS      ////////////////////////////
describe("Navigation Links", () => {
  test("should render navigation links", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    // logoLink
    const logoLink = screen.getByRole("link", {
      name: /logo/i,
    });
    expect(logoLink).toBeInTheDocument();

    // homeLink
    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    expect(homeLink).toBeInTheDocument();

    // timetableLink
    const timetableLink = screen.getByRole("link", {
      name: /timetable/i,
    });
    expect(timetableLink).toBeInTheDocument();

    // activitiesLink
    const activitiesLink = screen.getByRole("link", {
      name: /activities/i,
    });
    expect(activitiesLink).toBeInTheDocument();

    // friendsLink
    const friendsLink = screen.getByRole("link", {
      name: /friends/i,
    });
    expect(friendsLink).toBeInTheDocument();

    // contactLink
    const contactLink = screen.getByRole("link", {
      name: /contact/i,
    });
    expect(contactLink).toBeInTheDocument();
  });
});

//      BUTTONS & DROPDOWNS      //////////////
describe("Buttons & Dropdowns", () => {
  //
  // Toggle Button
  test("should render Toggle Button", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const toggleButton = screen.getByRole("button", {
      name: /toggle/i,
    });
    expect(toggleButton).toBeInTheDocument();
  });

  // About Us Dropdown
  test("should render 'About Us' Dropdown", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const aboutButton = screen.getByRole("button", {
      name: /about/i,
    });
    expect(aboutButton).toBeInTheDocument();
  });

  // English Lessons Dropdown
  test("should render 'English Lessons' Dropdown", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const lessonsButton = screen.getByRole("button", {
      name: /lessons/i,
    });
    expect(lessonsButton).toBeInTheDocument();
  });
});

//      DROPDOWN LISTS RENDER      /////////////////////////
describe("Dropdown Lists work as expected", () => {
  //
  // About Us Dropdown
  test('"About Us" dropdown works as expected', async () => {
    user.setup();

    render(
      <Router>
        <Header />
      </Router>
    );

    // About Us Button
    const aboutButton = screen.getByRole("button", {
      name: /about/i,
    });

    await act(() => user.click(aboutButton));

    // History link
    const historyLink = screen.getByRole("link", {
      name: /history/i,
    });
    expect(historyLink).toBeInTheDocument();
    expect(historyLink).toHaveAttribute("href", "/history");

    // Tutors link
    const tutorList = screen.getByRole("link", {
      name: /tutors/i,
    });
    expect(tutorList).toBeInTheDocument();
    expect(tutorList).toHaveAttribute("href", "/tutors");

    // Board link
    const boardList = screen.getByRole("link", {
      name: /board/i,
    });
    expect(boardList).toBeInTheDocument();
    expect(boardList).toHaveAttribute("href", "/board");
  });

  // English Lessons Dropdown
  test('"English Lessons" dropdown works as expected', async () => {
    user.setup();

    render(
      <Router>
        <Header />
      </Router>
    );

    // English Lessons Button
    const lessonsButton = screen.getByRole("button", {
      name: /lesson/i,
    });

    await act(() => user.click(lessonsButton));

    // Beginners' link
    const beginnersLink = screen.getByRole("link", {
      name: /beginner/i,
    });
    expect(beginnersLink).toBeInTheDocument();
    expect(beginnersLink).toHaveAttribute("href", "/beginners");

    // Intermediate link
    const intermediateLink = screen.getByRole("link", {
      name: /intermediate/i,
    });
    expect(intermediateLink).toBeInTheDocument();
    expect(intermediateLink).toHaveAttribute("href", "/intermediate");

    // Advanced link
    const advancedLink = screen.getByRole("link", {
      name: /advanced/i,
    });
    expect(advancedLink).toBeInTheDocument();
    expect(advancedLink).toHaveAttribute("href", "/advanced");

    // IELTS link
    const ieltsLink = screen.getByRole("link", {
      name: /ielts/i,
    });
    expect(ieltsLink).toBeInTheDocument();
    expect(ieltsLink).toHaveAttribute("href", "/ielts");
  });
});
