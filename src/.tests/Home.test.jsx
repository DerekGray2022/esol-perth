import { render, screen } from "@testing-library/react";

import Home from "../pages/Home";

//      IMAGES      ///////////////////////////////////////////
describe("Images", () => {
  // ALL Images
  test("should render ALL images", async () => {
    render(<Home />);

    const allImgs = await screen.findAllByRole("img");
    expect(allImgs).toHaveLength(22);
  });

  test("should render INDIVIDUAL images", async () => {
    render(<Home />);

    // lesson00
    const lesson00 = screen.getByRole("img", {
      name: /lesson00/i,
    });
    expect(lesson00).toBeInTheDocument();

    // believe
    const believe = screen.getByRole("img", {
      name: /believe/i,
    });
    expect(believe).toBeInTheDocument();

    // studyMates
    const studyMates = screen.getByRole("img", {
      name: /studyMates/i,
    });
    expect(studyMates).toBeInTheDocument();

    // lesson03
    const lesson03 = screen.getByRole("img", {
      name: /lesson03/i,
    });
    expect(lesson03).toBeInTheDocument();

    // wrappingUp
    const wrappingUp = screen.getByRole("img", {
      name: /wrappingUp/i,
    });
    expect(wrappingUp).toBeInTheDocument();

    // lesson01
    const lesson01 = screen.getByRole("img", {
      name: /lesson01/i,
    });
    expect(lesson01).toBeInTheDocument();

    // studentStudy
    const studentStudy = screen.getByRole("img", {
      name: /studentStudy/i,
    });
    expect(studentStudy).toBeInTheDocument();

    // capeWrath
    const capeWrath = screen.getByRole("img", {
      name: /capeWrath/i,
    });
    expect(capeWrath).toBeInTheDocument();

    // allStrong
    const allStrong = screen.getByRole("img", {
      name: /all strong/i,
    });
    expect(allStrong).toBeInTheDocument();

    // corraFoundation
    const corraFoundation = screen.getByRole("img", {
      name: /corra Foundation/i,
    });
    expect(corraFoundation).toBeInTheDocument();

    // foundationScotland
    const foundationScotland = screen.getByRole("img", {
      name: /foundation Scotland/i,
    });
    expect(foundationScotland).toBeInTheDocument();

    // inspiringCommunities
    const inspiringCommunities = screen.getByRole("img", {
      name: /inspiring Communities/i,
    });
    expect(inspiringCommunities).toBeInTheDocument();

    // leathersellers
    const leathersellers = screen.getByRole("img", {
      name: /leathersellers/i,
    });
    expect(leathersellers).toBeInTheDocument();

    // localGiving
    const localGiving = screen.getByRole("img", {
      name: /local Giving/i,
    });
    expect(localGiving).toBeInTheDocument();

    // nationalLottery
    const nationalLottery = screen.getByRole("img", {
      name: /national Lottery/i,
    });
    expect(nationalLottery).toBeInTheDocument();

    // policeScotland
    const policeScotland = screen.getByRole("img", {
      name: /police Scotland/i,
    });
    expect(policeScotland).toBeInTheDocument();

    // robertsonTrust
    const robertsonTrust = screen.getByRole("img", {
      name: /robertson Trust/i,
    });
    expect(robertsonTrust).toBeInTheDocument();

    // scottishRefugeeCouncil
    const scottishRefugeeCouncil = screen.getByRole("img", {
      name: /scottish Refugee Council/i,
    });
    expect(scottishRefugeeCouncil).toBeInTheDocument();

    // souterCharitableTrust
    const souterCharitableTrust = screen.getByRole("img", {
      name: /souter Charitable Trust/i,
    });
    expect(souterCharitableTrust).toBeInTheDocument();

    // tayFM
    const tayFM = screen.getByRole("img", {
      name: /tay FM/i,
    });
    expect(tayFM).toBeInTheDocument();

    // thomasWallTrust
    const thomasWallTrust = screen.getByRole("img", {
      name: /thomas Wall Trust/i,
    });
    expect(thomasWallTrust).toBeInTheDocument();

    // woodwardCharitableTrust
    const woodwardCharitableTrust = screen.getByRole("img", {
      name: /woodward Charitable Trust/i,
    });
    expect(woodwardCharitableTrust).toBeInTheDocument();
  });
});

//      HEADINGS      ////////////////////////////////////////////////
describe("Headings", () => {
  // ALL Headings
  test("should render ALL headings", () => {
    render(<Home />);

    const allHeadings = screen.getAllByRole("heading");
    expect(allHeadings).toHaveLength(7);
  });

  // INDIVIDUAL Headings
  test("should render INDIVIDUAL headings", () => {
    render(<Home />);

    // lessonsTimetable
    const lessonsTimetable = screen.getByRole("heading", {
      name: /lessons Timetable/i,
    });
    expect(lessonsTimetable).toBeInTheDocument();

    // capeWrathUltra
    const capeWrathUltra = screen.getByRole("heading", {
      name: /cape Wrath Ultra/i,
    });
    expect(capeWrathUltra).toBeInTheDocument();

    // esolperth
    const esolperth = screen.getByRole("heading", {
      name: /esolperth/i,
    });
    expect(esolperth).toBeInTheDocument();

    // facebook
    const facebook = screen.getByRole("heading", {
      name: /facebook/i,
    });
    expect(facebook).toBeInTheDocument();

    // instagram
    const instagram = screen.getByRole("heading", {
      name: /instagram/i,
    });
    expect(instagram).toBeInTheDocument();

    // ourSponsors
    const ourSponsors = screen.getByRole("heading", {
      name: /our Sponsors/i,
    });
    expect(ourSponsors).toBeInTheDocument();

    // register
    const register = screen.getByRole("heading", {
      name: /register/i,
    });
    expect(register).toBeInTheDocument();
  });
});

//      LINKS      ////////////////////////////////////////////////
describe("Links", () => {
  // ALL Links
  test("should render ALL Links", () => {
    render(<Home />);

    const allLinks = screen.getAllByRole("link");
    expect(allLinks).toHaveLength(17);
  });

  // INDIVIDUAL Links
  test("should render INDIVIDUAL Links", () => {
    render(<Home />);

    // donate
    const donate = screen.getByRole("link", {
      name: /donate/i,
    });
    expect(donate).toBeInTheDocument();

    // facebook
    const facebook = screen.getByRole("link", {
      name: /facebook/i,
    });
    expect(facebook).toBeInTheDocument();

    // instagram
    const instagram = screen.getByRole("link", {
      name: /instagram/i,
    });
    expect(instagram).toBeInTheDocument();

    // allStrong
    const allStrong = screen.getByRole("link", {
      name: /all Strong/i,
    });
    expect(allStrong).toBeInTheDocument();

    // corraFoundation
    const corraFoundation = screen.getByRole("link", {
      name: /corra Foundation/i,
    });
    expect(corraFoundation).toBeInTheDocument();

    // foundationScotland
    const foundationScotland = screen.getByRole("link", {
      name: /foundation Scotland/i,
    });
    expect(foundationScotland).toBeInTheDocument();

    // inspiringCommunities
    const inspiringCommunities = screen.getByRole("link", {
      name: /inspiring Communities/i,
    });
    expect(inspiringCommunities).toBeInTheDocument();

    // leathersellers
    const leathersellers = screen.getByRole("link", {
      name: /leathersellers/i,
    });
    expect(leathersellers).toBeInTheDocument();

    // localGiving
    const localGiving = screen.getByRole("link", {
      name: /local Giving/i,
    });
    expect(localGiving).toBeInTheDocument();

    // nationalLottery
    const nationalLottery = screen.getByRole("link", {
      name: /national Lottery/i,
    });
    expect(nationalLottery).toBeInTheDocument();

    // policeScotland
    const policeScotland = screen.getByRole("link", {
      name: /police Scotland/i,
    });
    expect(policeScotland).toBeInTheDocument();

    // robertsonTrust
    const robertsonTrust = screen.getByRole("link", {
      name: /robertson Trust/i,
    });
    expect(robertsonTrust).toBeInTheDocument();

    // scottishRefugeeCouncil
    const scottishRefugeeCouncil = screen.getByRole("link", {
      name: /scottish Refugee Council/i,
    });
    expect(scottishRefugeeCouncil).toBeInTheDocument();

    // souterCharitableTrust
    const souterCharitableTrust = screen.getByRole("link", {
      name: /souter Charitable Trust/i,
    });
    expect(souterCharitableTrust).toBeInTheDocument();

    // tayFM
    const tayFM = screen.getByRole("link", {
      name: /tay FM/i,
    });
    expect(tayFM).toBeInTheDocument();

    // thomasWallTrust
    const thomasWallTrust = screen.getByRole("link", {
      name: /thomas Wall Trust/i,
    });
    expect(thomasWallTrust).toBeInTheDocument();

    // woodwardCharitableTrust
    const woodwardCharitableTrust = screen.getByRole("link", {
      name: /woodward Charitable Trust/i,
    });
    expect(woodwardCharitableTrust).toBeInTheDocument();
  });
});

//      BUTTONS      ////////////////////////////////////////////////
describe("buttons", () => {
  // Donate Button
  test("should render Donate button", () => {
    render(<Home />);

    const donate = screen.getByRole("button", {
      name: /donate/i,
    });
    expect(donate).toBeInTheDocument();
  });

  // Submit Button
  test("should render Submit button", () => {
    render(<Home />);

    const submit = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(submit).toBeInTheDocument();
  });
});

//      INPUTS      ////////////////////////////////////////////////
describe("Inputs", () => {
  // Enter Name
  test("should render Full Name textbox", () => {
    render(<Home />);

    const inputName = screen.getByPlaceholderText(/full name/i);
    expect(inputName).toBeInTheDocument();
  });

  // Enter Email
  test("should render Email textbox", () => {
    render(<Home />);

    const inputEmail = screen.getByPlaceholderText(/email/i);
    expect(inputEmail).toBeInTheDocument();
  });
});

//  TEXT      ////////////////////////////////////////////////
describe("Text Blocks", () => {
  test("should render Text", () => {
    render(<Home />);

    // Intro Text
    const introText = screen.getByText(/^ESOLPERTH provides English lessons/i);
    expect(introText).toBeInTheDocument();

    // Donate Text
    const donateText = screen.getByText(/^We rely on funding from/i);
    expect(donateText).toBeInTheDocument();

    // Register Text
    const registerText = screen.getByText(/^Register here for/i);
    expect(registerText).toBeInTheDocument();

    // We'll Never Text
    const weNeverText = screen.getByText(/^We'll never share/i);
    expect(weNeverText).toBeInTheDocument();
  });
});
