import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import IndexPage from "@/pages/IndexPage";

describe("Index", () => {
  it("should have 인덱스", () => {
    render(<IndexPage />);
    expect(screen.getByText(/인덱스/)).toBeInTheDocument();
  });
});
