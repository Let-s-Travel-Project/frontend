import { render, screen } from "@testing-library/react";
import SelectButton from "@/components/common/SelectButton";
import { it, expect, describe } from "vitest";
import userEvent from "@testing-library/user-event";
import * as React from "react";

// describe("SelectButton applies correct CSS classes based on isSelect prop", () => {
//   const { container } = render(
//     <SelectButton isSelect={true}>Button Text</SelectButton>
//   );

//   const buttonWrapper = container.firstChild;
//   expect(buttonWrapper).toHaveClass(
//     "flex px-2 py-1 border border-signitureBlue"
//   );

//   const buttonText = buttonWrapper.firstChild;
//   expect(buttonText).toHaveClass(
//     "text-xl font-medium md:text-2xl md:font-semibold"
//   );
// });

// describe("SelectButton does not apply border class when isSelect prop is false", () => {
//   const { container } = render(
//     <SelectButton isSelect={false}>Button Text</SelectButton>
//   );

//   const buttonWrapper = container.firstChild;
//   expect(buttonWrapper).toHaveClass("flex px-2 py-1");
// });

describe("Select Button", () => {
  it("should apply correct CSS classes based on id", () => {
    const { container } = render(
      <SelectButton id={0}>Button Text</SelectButton>
    );
    const btnWrapper = container.firstChild;

    expect(btnWrapper).toHaveClass(/border/);
  });
  it("should apply correct CSS classes based on not the first index", async () => {
    const { container } = render(
      <SelectButton id={2}>Button Text</SelectButton>
    );

    const btnWrapper = container.firstChild;
    expect(btnWrapper).not.toHaveClass(/border/);
  });
  // userEvent가 Button에 대해서 클릭일 때 css클래스가 잘 작동하도록
  it("should apply correct CSS classes when clicked", async () => {
    const { container } = render(
      <SelectButton id={4}>Button Text</SelectButton>
    );

    const btnWrapper = container.firstChild;
    await userEvent.click(btnWrapper);
    expect(btnWrapper).toHaveClass(/border/);
  });
});
