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
  test("should render Logo Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const esolperthLink = screen.getByRole("link", {
      name: /esolperth logo/i,
    });
    expect(esolperthLink).toBeInTheDocument();
  });

  // Email Link
  test("should render Email Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const emailLink = screen.getByRole("link", {
      name: /gmail.com/i,
    });
    expect(emailLink).toBeInTheDocument();
  });

  // OSCR Link
  test("should render OSCR Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const oscrLink = screen.getByRole("link", {
      name: /oscr/i,
    });
    expect(oscrLink).toBeInTheDocument();
  });

  // SCVO Link
  test("should render SCVO Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const scvoLink = screen.getByRole("link", {
      name: /scvo/i,
    });
    expect(scvoLink).toBeInTheDocument();
  });

  // Facebook Link
  test("should render Facebook Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const facebookLink = screen.getByTestId("facebook");
    expect(facebookLink).toBeInTheDocument();
  });

  // Instagram Link
  test("should render Instagram Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    const instagramLink = screen.getByTestId("instagram");
    expect(instagramLink).toBeInTheDocument();
  });

  // Page Links
  test("should render Page Links", () => {
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

    //   historyLink
    const historyLink = screen.getByRole("link", {
      name: /history/i,
    });
    expect(historyLink).toBeInTheDocument();

    //   tutorsLink
    const tutorsLink = screen.getByRole("link", {
      name: /tutors/i,
    });
    expect(tutorsLink).toBeInTheDocument();

    //   boardLink
    const boardLink = screen.getByRole("link", {
      name: /board/i,
    });
    expect(boardLink).toBeInTheDocument();

    //   timetableLink
    const timetableLink = screen.getByRole("link", {
      name: /timetable/i,
    });
    expect(timetableLink).toBeInTheDocument();

    //   beginnersLink
    const beginnersLink = screen.getByRole("link", {
      name: /beginners/i,
    });
    expect(beginnersLink).toBeInTheDocument();

    //   intermediateLink
    const intermediateLink = screen.getByRole("link", {
      name: /intermediate/i,
    });
    expect(intermediateLink).toBeInTheDocument();

    //   advancedLink
    const advancedLink = screen.getByRole("link", {
      name: /advanced/i,
    });
    expect(advancedLink).toBeInTheDocument();

    //   ieltsLink
    const ieltsLink = screen.getByRole("link", {
      name: /ielts/i,
    });
    expect(ieltsLink).toBeInTheDocument();

    //   activitiesLink
    const activitiesLink = screen.getByRole("link", {
      name: /activities/i,
    });
    expect(activitiesLink).toBeInTheDocument();

    //   friendsLink
    const friendsLink = screen.getByRole("link", {
      name: /friends/i,
    });
    expect(friendsLink).toBeInTheDocument();

    //   contactLink
    const contactLink = screen.getByRole("link", {
      name: /contact/i,
    });
    expect(contactLink).toBeInTheDocument();
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
