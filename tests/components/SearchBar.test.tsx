import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import SearchBar from "@/pages/Search/SearchBar";
import userEvent from "@testing-library/user-event";

describe("Search Bar", () => {
  it("should render input", () => {
    render(<SearchBar />);
    const input = screen.getByLabelText("searchInput");
    expect(input).toBeInTheDocument();
  });
});
