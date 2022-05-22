import React from "react";
import { render } from "@testing-library/react";

import { FormItem } from "./FormItem";
import { Input } from "../Input/Input";

describe("Form Item", () => {
  test("should render default form item with input", () => {
    const { container } = render(
      <FormItem>
        <Input isFormGroup onChange={() => {}} value="" />
      </FormItem>
    );
    expect(container).toBeTruthy();
  });

  test("should render label", () => {
    const { container } = render(
      <FormItem label="label">
        <Input isFormGroup onChange={() => {}} value="" />
      </FormItem>
    );
    expect(container.querySelector("label")).toBeTruthy();
  });

  test("should render error message", () => {
    const { container } = render(
      <FormItem message="message text" hasError>
        <Input isFormGroup onChange={() => {}} value="" />
      </FormItem>
    );
    expect(container.querySelector("p")?.classList.contains("errorMessage")).toBe(true);
  });
});
