import { render, screen } from "@testing-library/react";

import Tutors from "../pages/Tutors";

////        SPLASH DIVISION        //////////////////////////////////
describe("Splash Division", () => {
  // Splash Division
  test("should render Splash Division", () => {
    render(<Tutors />);

    const splashDiv = screen.getByTestId(/splash/i);
    expect(splashDiv).toBeInTheDocument();
  });

  // Splash Division has Background Image
  test("Splash Division has Background Image", () => {
    render(<Tutors />);

    const splashDiv = screen.getByTestId(/splash/i);
    expect(splashDiv).toHaveStyle({
      backgroundImage: "",
    });
  });
});

////        HEADINGS        /////////////////////////////////////////////
describe("Headings", () => {
  // Senior Tutor
  test("should render Senior Tutor Header", () => {
    render(<Tutors />);

    const seniorHeader = screen.getByRole("heading", {
      level: 3,
      name: /^senior/i,
    });
    expect(seniorHeader).toBeInTheDocument();
  });

  // English Language Tutor
  test("should render English Language Tutor Header", () => {
    render(<Tutors />);

    const englishHeader = screen.getByRole("heading", {
      level: 3,
      name: /^english/i,
    });
    expect(englishHeader).toBeInTheDocument();
  });

  // Support Workers
  test("should render Support Workers Header", () => {
    render(<Tutors />);

    const supportHeader = screen.getByRole("heading", {
      level: 3,
      name: /^support/i,
    });
    expect(supportHeader).toBeInTheDocument();
  });

  // Voice Coaches
  test("should render Voice Coaches Header", () => {
    render(<Tutors />);

    const voiceHeader = screen.getByRole("heading", {
      level: 5,
      name: /^voice/i,
    });
    expect(voiceHeader).toBeInTheDocument();
  });

  // Playworker
  test("should render Playworker Header", () => {
    render(<Tutors />);

    const playworkerHeader = screen.getByRole("heading", {
      level: 5,
      name: /^playworker/i,
    });
    expect(playworkerHeader).toBeInTheDocument();
  });

  // Administrator
  test("should render Administrator Header", () => {
    render(<Tutors />);

    const administratorHeader = screen.getByRole("heading", {
      level: 5,
      name: /^administrator/i,
    });
    expect(administratorHeader).toBeInTheDocument();
  });
});

////        IMAGES        /////////////////////////////////////////////
describe("Images", () => {
  // Senior Tutor
  test("should render Senior Tutor", () => {
    render(<Tutors />);

    const seniorImage = screen.getByRole("img", {
      name: /linda/i,
    });
    expect(seniorImage).toBeInTheDocument();
  });

  // Tutor
  test("should render Tutor Image", () => {
    render(<Tutors />);

    const tutorImage = screen.getByRole("img", {
      name: /tutor/i,
    });
    expect(tutorImage).toBeInTheDocument();
  });

  // Voice Coach
  test("should render Voice Coach Image", () => {
    render(<Tutors />);

    const voiceImage = screen.getByRole("img", {
      name: /voice/i,
    });
    expect(voiceImage).toBeInTheDocument();
  });

  // Playworker
  test("should render Playworker Image", () => {
    render(<Tutors />);

    const playworkerImage = screen.getByRole("img", {
      name: /playworker/i,
    });
    expect(playworkerImage).toBeInTheDocument();
  });

  // Administrator
  test("should render Administrator Image", () => {
    render(<Tutors />);

    const administratorImage = screen.getByRole("img", {
      name: /administrator/i,
    });
    expect(administratorImage).toBeInTheDocument();
  });
});

////        PARAGRAPHS        /////////////////////////////////////////////
describe("Paragraphs", () => {
  test("should render ALL 22 Paragraphs", () => {
    render(<Tutors />);

    const paragraph01 = screen.getByText(/^We know that/i);
    expect(paragraph01).toBeInTheDocument();

    const paragraph02 = screen.getByText(/^Our tutors are/i);
    expect(paragraph02).toBeInTheDocument();

    const paragraph03 = screen.getByText(/^Linda has lived/i);
    expect(paragraph03).toBeInTheDocument();

    const paragraph04 = screen.getByText(/^Linda lives in/i);
    expect(paragraph04).toBeInTheDocument();

    const paragraph05 = screen.getByText(/^Linda qualified as/i);
    expect(paragraph05).toBeInTheDocument();

    const paragraph06 = screen.getByText(/^After 30 years/i);
    expect(paragraph06).toBeInTheDocument();

    const paragraph07 = screen.getByText(/^Since 2001 Linda/i);
    expect(paragraph07).toBeInTheDocument();

    const paragraph08 = screen.getByText(/^Linda enjoys the/i);
    expect(paragraph08).toBeInTheDocument();

    const paragraph09 = screen.getByText(/^Liz Auld/i);
    expect(paragraph09).toBeInTheDocument();

    const paragraph10 = screen.getByText(/^Michael Ellacott/i);
    expect(paragraph10).toBeInTheDocument();

    const paragraph11 = screen.getByText(/^Karen Guthrie/i);
    expect(paragraph11).toBeInTheDocument();

    const paragraph12 = screen.getByText(/^Sarah Jamieson/i);
    expect(paragraph12).toBeInTheDocument();

    const paragraph13 = screen.getByText(/^Helen Kirk/i);
    expect(paragraph13).toBeInTheDocument();

    const paragraph14 = screen.getByText(/^Kasia McGregor/i);
    expect(paragraph14).toBeInTheDocument();

    const paragraph15 = screen.getByText(/^Louise Milne/i);
    expect(paragraph15).toBeInTheDocument();

    const paragraph16 = screen.getByText(/^Joshua Olewole/i);
    expect(paragraph16).toBeInTheDocument();

    const paragraph17 = screen.getByText(/^Agi Parzniewska/i);
    expect(paragraph17).toBeInTheDocument();

    const paragraph18 = screen.getByText(/^Shona Robertson/i);
    expect(paragraph18).toBeInTheDocument();

    const paragraph19 = screen.getByText(/^Lily Scott/i);
    expect(paragraph19).toBeInTheDocument();

    const paragraph20 = screen.getByText(/^Edna Auld/i);
    expect(paragraph20).toBeInTheDocument();

    const paragraph21 = screen.getByText(/^Elsa Tesfamichael/i);
    expect(paragraph21).toBeInTheDocument();

    const paragraph22 = screen.getByText(/^ESOLPERTH Administrator/i);
    expect(paragraph22).toBeInTheDocument();
  });
});
