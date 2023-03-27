import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "../components/Footer";

//      IMAGES        ////////////////////////////////////////
describe("Images", () => {
  // Esolperth Logo
  test("should render Esolperth Logo", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const esolperth = screen.getByRole("img", {
      name: /esolperth/i,
    });
    expect(esolperth).toBeInTheDocument();
  });

  // OSCR Logo
  test("should render OSCR Logo", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const oscr = screen.getByRole("img", {
      name: /oscr/i,
    });
    expect(oscr).toBeInTheDocument();
  });

  // SCVO Logo
  test("should render SCVO Logo", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const scvo = screen.getByRole("img", {
      name: /scvo/i,
    });
    expect(scvo).toBeInTheDocument();
  });
});

//      LINKS        ////////////////////////////////////////
describe("Links", () => {
  // Esolperth Logo Link
  test("Logo Link should work as expected", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const esolperthLink = screen.getByRole("link", {
      name: /esolperth logo/i,
    });
    expect(esolperthLink).toBeInTheDocument();
    expect(esolperthLink).toHaveAttribute("href", "/");
  });

  // Email Link
  test("Email Link should work as expected", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const emailLink = screen.getByRole("link", {
      name: /gmail.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:esolperth@gmail.com?subject=Website%20Query"
    );
  });

  // OSCR Link
  test("OSCR Link should work as expected", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const oscrLink = screen.getByRole("link", {
      name: /oscr/i,
    });
    expect(oscrLink).toBeInTheDocument();
    expect(oscrLink).toHaveAttribute(
      "href",
      "https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC046650"
    );
  });

  // SCVO Link
  test("SCVO Link should work as expected", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const scvoLink = screen.getByRole("link", {
      name: /scvo/i,
    });
    expect(scvoLink).toBeInTheDocument();
    expect(scvoLink).toHaveAttribute(
      "href",
      "https://scvo.scot/membership/members/5812/esolperth"
    );
  });

  // Facebook Link
  test("Facebook Link should work as expected", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const facebookLink = screen.getByTestId("facebook");
    expect(facebookLink).toBeInTheDocument();
    expect(facebookLink).toHaveAttribute(
      "href",
      "https://www.facebook.com/search/top?q=esolperth"
    );
  });

  // Instagram Link
  test("Instagram Link should work as expected", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const instagramLink = screen.getByTestId("instagram");
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink).toHaveAttribute(
      "href",
      "https://www.instagram.com/explore/locations/389478557923021/esolperth/"
    );
  });

  // Page Links
  test("Page Links should work as expected", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    //   homeLink
    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    //   historyLink
    const historyLink = screen.getByRole("link", {
      name: /history/i,
    });
    expect(historyLink).toBeInTheDocument();
    expect(historyLink).toHaveAttribute("href", "/history");

    //   tutorsLink
    const tutorsLink = screen.getByRole("link", {
      name: /tutors/i,
    });
    expect(tutorsLink).toBeInTheDocument();
    expect(tutorsLink).toHaveAttribute("href", "/tutors");

    //   boardLink
    const boardLink = screen.getByRole("link", {
      name: /board/i,
    });
    expect(boardLink).toBeInTheDocument();
    expect(boardLink).toHaveAttribute("href", "/board");

    //   timetableLink
    const timetableLink = screen.getByRole("link", {
      name: /timetable/i,
    });
    expect(timetableLink).toBeInTheDocument();
    expect(timetableLink).toHaveAttribute("href", "/timetable");

    //   beginnersLink
    const beginnersLink = screen.getByRole("link", {
      name: /beginners/i,
    });
    expect(beginnersLink).toBeInTheDocument();
    expect(beginnersLink).toHaveAttribute("href", "/beginners");

    //   intermediateLink
    const intermediateLink = screen.getByRole("link", {
      name: /intermediate/i,
    });
    expect(intermediateLink).toBeInTheDocument();
    expect(intermediateLink).toHaveAttribute("href", "/intermediate");

    //   advancedLink
    const advancedLink = screen.getByRole("link", {
      name: /advanced/i,
    });
    expect(advancedLink).toBeInTheDocument();
    expect(advancedLink).toHaveAttribute("href", "/advanced");

    //   ieltsLink
    const ieltsLink = screen.getByRole("link", {
      name: /ielts/i,
    });
    expect(ieltsLink).toBeInTheDocument();
    expect(ieltsLink).toHaveAttribute("href", "/ielts");

    //   activitiesLink
    const activitiesLink = screen.getByRole("link", {
      name: /activities/i,
    });
    expect(activitiesLink).toBeInTheDocument();
    expect(activitiesLink).toHaveAttribute("href", "/activities");

    //   friendsLink
    const friendsLink = screen.getByRole("link", {
      name: /friends/i,
    });
    expect(friendsLink).toBeInTheDocument();
    expect(friendsLink).toHaveAttribute("href", "/friends");

    //   contactLink
    const contactLink = screen.getByRole("link", {
      name: /contact/i,
    });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });
});

describe("Copyright Data", () => {
  // Esolperth Copyright
  test("should render Esolperth Copyright", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const esolCopy = screen.getByText(/2023 esolperth/i);
    expect(esolCopy).toBeInTheDocument();
  });

  // Little Wise Monkey
  test("should render Little Wise Monkey", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const lwmCopy = screen.getByText(/powered by/i);
    expect(lwmCopy).toBeInTheDocument();
  });
});
