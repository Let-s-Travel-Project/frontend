import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import IndexPage from "@/pages/Search/IndexPage";

describe("Index", () => {
  it("should have 인덱스", () => {
    render(<IndexPage />);
  });
});
