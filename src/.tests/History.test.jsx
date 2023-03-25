import { render, screen } from "@testing-library/react";

import History from "../pages/History";

////      HEADINGS        ///////////////////////////////////////////////////////
describe("Headings", () => {
  // History Header
  test('should render "History" header', () => {
    render(<History />);

    const historyHeader = screen.getByRole("heading", {
      level: 5,
      name: /history/i,
    });
    expect(historyHeader).toBeInTheDocument();
  });

  // Our Aims Header
  test('should render "Our Aims" header', () => {
    render(<History />);

    const aimsHeader = screen.getByRole("heading", {
      level: 5,
      name: /aims/i,
    });
    expect(aimsHeader).toBeInTheDocument();
  });

  // Our Objectives Header
  test('should render "Our Objectives" header', () => {
    render(<History />);

    const objectivesHeader = screen.getByRole("heading", {
      level: 5,
      name: /objectives/i,
    });
    expect(objectivesHeader).toBeInTheDocument();
  });
});

////      IMAGES        ///////////////////////////////////////////////////////
describe("Images", () => {
  // historyImage
  test('should render "History" Image', () => {
    render(<History />);

    const historyImage = screen.getByRole("img", {
      name: /history/i,
    });
    expect(historyImage).toBeInTheDocument();
  });

  // ourAimImage
  test('should render "Our Aim" Image', () => {
    render(<History />);

    const ourAimImage = screen.getByRole("img", {
      name: /ourAim/i,
    });
    expect(ourAimImage).toBeInTheDocument();
  });

  // ourObjectivesImage
  test('should render "Our Objectives" Image', () => {
    render(<History />);

    const ourObjectivesImage = screen.getByRole("img", {
      name: /ourObjectives/i,
    });
    expect(ourObjectivesImage).toBeInTheDocument();
  });
});

////      OUR OBJECTIVES LIST        ///////////////////////////////////
describe("Objectives List", () => {
  // Render complete Objectives List
  test("should render Objectives List", () => {
    render(<History />);

    const objectivesList = screen.getByRole("list");
    expect(objectivesList).toBeInTheDocument();
  });

  // Render Inclusion List Item
  test("should render Inclusion List Item", () => {
    render(<History />);

    const inclusionListitem = screen.getByTestId("inclusion");
    expect(inclusionListitem).toBeInTheDocument();
  });

  // Render Instruction List Item
  test("should render Instruction List Item", () => {
    render(<History />);

    const instructionListitem = screen.getByTestId("instruction");
    expect(instructionListitem).toBeInTheDocument();
  });

  // Render Respect List Item
  test("should render Respect List Item", () => {
    render(<History />);

    const respectListitem = screen.getByTestId("respect");
    expect(respectListitem).toBeInTheDocument();
  });
});

////      PARAGRAPHS        ///////////////////////////////////
describe("Paragraphs", () => {
  // Paragraph 01
  test("should render Paragraph 01", () => {
    render(<History />);

    const para01 = screen.getByText(/^ESOLPERTH is an English/i);
    expect(para01).toBeInTheDocument();
  });

  // Paragraph 02
  test("should render Paragraph 02", () => {
    render(<History />);

    const para02 = screen.getByText(/^Originally started in 2015/i);
    expect(para02).toBeInTheDocument();
  });

  // Paragraph 03
  test("should render Paragraph 03", () => {
    render(<History />);

    const para03 = screen.getByText(/^We try to teach/i);
    expect(para03).toBeInTheDocument();
  });

  // Paragraph 04
  test("should render Paragraph 04", () => {
    render(<History />);

    const para04 = screen.getByText(/^All our lessons/i);
    expect(para04).toBeInTheDocument();
  });

  // Paragraph 05
  test("should render Paragraph 05", () => {
    render(<History />);

    const para05 = screen.getByText(/^The main aim of ESOLPERTH/i);
    expect(para05).toBeInTheDocument();
  });

  // Paragraph 06
  test("should render Paragraph 06", () => {
    render(<History />);

    const para06 = screen.getByText(/^Inclusion, empowerment/i);
    expect(para06).toBeInTheDocument();
  });

  // Paragraph 07
  test("should render Paragraph 07", () => {
    render(<History />);

    const para07 = screen.getByText(/^Instruction with an attitude/i);
    expect(para07).toBeInTheDocument();
  });

  // Paragraph 08
  test("should render Paragraph 08", () => {
    render(<History />);

    const para08 = screen.getByText(/^Respect for the culture/i);
    expect(para08).toBeInTheDocument();
  });
});
