import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import AddButton from "@/components/common/AddButton";
describe("AddButton Test", () => {
  it("should render itself", () => {
    render(<AddButton />);
  });
});
