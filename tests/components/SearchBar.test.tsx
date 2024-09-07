import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import React from "react";
import SearchBar from "@/pages/Search/SearchBar";

describe("Search Bar", () => {
  it("should render input", () => {
    render(<SearchBar />);
    const input = screen.getByLabelText("searchInput");
    expect(input).toBeInTheDocument();
  });
});
