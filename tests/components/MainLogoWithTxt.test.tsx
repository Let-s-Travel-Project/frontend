import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import MainLogoWithTxt from "@/components/common/MainLogoWithTxt";

describe("Main logo with text", () => {
  it("should render image", () => {
    render(<MainLogoWithTxt />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  it("should render text", () => {
    render(<MainLogoWithTxt />);
    expect(screen.getByText(/letstravel/i)).toBeInTheDocument();
  });
});
