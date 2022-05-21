import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Form Item", () => {
  test("should have clean variant class", () => {
    const { container } = render(<Input value="value" onChange={() => {}} variant="clean" />);
    expect(container.querySelector("input")?.classList.contains("clean")).toBe(true);
  });

  test("should have error class", () => {
    const { container } = render(<Input value="value" onChange={() => {}} hasError />);
    expect(container.querySelector("input")?.classList.contains("error")).toBe(true);
  });

  test("should invoke onChange handler and should ", () => {
    const onChangeHandler = jest.fn();
    let text = "";
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeHandler();
      text = e.target?.value;
    };
    const { container } = render(<Input value={text} onChange={onChange} />);
    const input = container.querySelector("input") as HTMLElement;
    fireEvent.change(input, { target: { value: "text" } });
    expect(onChangeHandler).toBeCalled();
    expect(text).toEqual("text");
  });
});
