import { render, screen } from "@testing-library/react";
import Resources from "./Resources";
import { RESOURCE_HIGHLIGHTS } from "./resources-content";

describe("Resources", () => {
  it("renders all 4 resource highlight labels", () => {
    render(<Resources />);

    for (const resource of RESOURCE_HIGHLIGHTS) {
      expect(screen.getByText(resource.label)).toBeInTheDocument();
    }
  });
});
