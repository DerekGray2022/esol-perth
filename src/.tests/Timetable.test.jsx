import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";

import Timetable from "../pages/Timetable";

////        HEADINGS        /////////////////////////////////////////
describe("Headings", () => {
  // Page Header
  test("should render Timetable header", () => {
    render(<Timetable />);

    const pageHeader = screen.getByRole("heading", {
      name: /timetable/i,
    });
    expect(pageHeader).toBeInTheDocument();
  });

  // Season Header
  test("should render Season header", () => {
    render(<Timetable />);

    const seasonHeader = screen.getByRole("heading", {
      name: /september/i,
    });
    expect(seasonHeader).toBeInTheDocument();
  });

  // Day Header
  test("should render Day header", () => {
    render(<Timetable />);

    const dayHeader = screen.getByRole("heading", {
      name: /monday/i,
    });
    expect(dayHeader).toBeInTheDocument();
  });
});

////        DAY SELECTION BUTTONS        /////////////////////
describe("Day Selection Buttons", () => {
  test("should render day selection buttons", () => {
    render(<Timetable />);

    const mon = screen.getByText(/^mon$/i);
    expect(mon).toBeInTheDocument();

    const tue = screen.getByText(/^tue$/i);
    expect(tue).toBeInTheDocument();

    const wed = screen.getByText(/^wed$/i);
    expect(wed).toBeInTheDocument();

    const thu = screen.getByText(/^thu$/i);
    expect(thu).toBeInTheDocument();

    const fri = screen.getByText(/^fri$/i);
    expect(fri).toBeInTheDocument();

    const sat = screen.getByText(/^sat$/i);
    expect(sat).toBeInTheDocument();

    const sun = screen.getByText(/^sun$/i);
    expect(sun).toBeInTheDocument();
  });
});

////        DAY SELECTION BUTTONS WORK        //////
describe("Day Selection Buttons Work", () => {
  // Tuesday
  test("should render Tuesday header", async () => {
    user.setup();
    render(<Timetable />);

    const tuesButton = screen.getByText(/^tue/i);
    await act(() => user.click(tuesButton));

    const tuesHeader = screen.getByRole("heading", {
      name: /Tuesday/i,
    });
    expect(tuesHeader).toBeInTheDocument();
  });

  // Wednesday
  test("should render Wednesday header", async () => {
    user.setup();
    render(<Timetable />);

    const wedButton = screen.getByText(/^wed/i);
    await act(() => user.click(wedButton));

    const wedHeader = screen.getByRole("heading", {
      name: /Wednesday/i,
    });
    expect(wedHeader).toBeInTheDocument();
  });

  // Thursday
  test("should render Thursday header", async () => {
    user.setup();
    render(<Timetable />);

    const thurButton = screen.getByText(/^thu/i);
    await act(() => user.click(thurButton));

    const thurHeader = screen.getByRole("heading", {
      name: /Thursday/i,
    });
    expect(thurButton).toBeInTheDocument();
  });

  // Friday
  test("should render Friday header", async () => {
    user.setup();
    render(<Timetable />);

    const friButton = screen.getByText(/^fri/i);
    await act(() => user.click(friButton));

    const friHeader = screen.getByRole("heading", {
      name: /Friday/i,
    });
    expect(friButton).toBeInTheDocument();
  });

  // Saturday
  test("should render Saturday header", async () => {
    user.setup();
    render(<Timetable />);

    const satButton = screen.getByText(/^sat/i);
    await act(() => user.click(satButton));

    const satHeader = screen.getByRole("heading", {
      name: /Saturday/i,
    });
    expect(satHeader).toBeInTheDocument();
  });

  // Sunday
  test("should render Sunday header", async () => {
    user.setup();
    render(<Timetable />);

    const sunButton = screen.getByText(/^sun/i);
    await act(() => user.click(sunButton));

    const sunHeader = screen.getByRole("heading", {
      name: /Sunday/i,
    });
    expect(sunHeader).toBeInTheDocument();
  });

  // Monday
  test("should render Monday header", async () => {
    user.setup();
    render(<Timetable />);

    const monButton = screen.getByText(/^mon$/i);
    await act(() => user.click(monButton));

    const monHeader = screen.getByRole("heading", {
      name: /Monday/i,
    });
    expect(monHeader).toBeInTheDocument();
  });
});
