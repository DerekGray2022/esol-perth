import { screen, render } from "@testing-library/react";

import BoardCard from "../components/BoardCard";
import members from "../components/BoardMembers";

describe("Renders Member Cards", () => {
  members.map((member) => {
    test(`should render ${member.name}`, () => {
      render(<BoardCard />);

      const firstName = `${member.firstName}`;
      const regEx = new RegExp(firstName, "i");

      // Image
      const img = screen.getByRole("img", {
        name: regEx,
      });
      expect(img).toBeInTheDocument();

      // Name
      const title = screen.getByRole("heading", {
        level: 3,
        name: regEx,
      });
      expect(title).toBeInTheDocument();

      // Summary Biography
      const paragraph = screen.getByRole("heading", {
        level: 6,
        name: regEx,
      });
      expect(paragraph).toBeInTheDocument();

      // "Read More" Button
      const button = screen.getByRole("button", {
        name: regEx,
      });
      expect(button).toBeInTheDocument();
    });
  });
});
