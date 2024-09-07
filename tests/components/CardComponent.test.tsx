import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import CardComponent from "@/components/common/CardComponent";
describe("Card Component", () => {
  it("should apply proper css class in the first child", () => {
    render(
      <CardComponent title="도쿄 Tokyo" subtitle="일본" imgUrl="tokyo.jpg" />
    );
    const cardWrapper = screen.getByTitle("cardBg");
    expect(cardWrapper).toHaveStyle({ backgroundImage: "url('tokyo.jpg')" });
  });
});
