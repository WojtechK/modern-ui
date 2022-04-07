import React from "react";
import { render, fireEvent } from "@testing-library/react";

import { Button } from "./Button";
import { Trash } from "../../assets/icons";

describe("Button", () => {
  test("should render default button", () => {
    const { debug, container } = render(<Button> Button </Button>);
    debug();
    expect(container.firstElementChild?.classList.contains('button')).toBe(true);
  });

  test("should render primary color button", () => {
    const { debug, container } = render(<Button color="primary"> Button </Button>);
    debug();
    expect(container.firstElementChild?.classList.contains('button-primary')).toBe(true);
  });

  test("should render large rounded button", () => {
    const { debug, container } = render(<Button size="large" isRounded> Button </Button>);
    debug();
    expect(container.firstElementChild?.classList.contains('button-large')).toBe(true);
    expect(container.firstElementChild?.classList.contains('button-rounded')).toBe(true);
  });

  test("should render icon button", () => {
    const { debug, container } = render(<Button iconButton={<Trash size={24}/>}> </Button>);
    debug();
    expect(container.querySelector('svg')).toBeTruthy;
  });

  test.only("should be disabled", () => {
    const onClickHandler = jest.fn();
    const { debug, container } = render(<Button disabled={true} onClick={onClickHandler}> Button </Button>);
    debug();
    expect(container.querySelector('button')).toHaveAttribute('disabled');
    fireEvent.click(container);
    expect(onClickHandler).toBeCalledTimes(0);
  });

  test("should have proper class and be not clickable while loading", () => {
    const onClickHandler = jest.fn();
    const { debug, container } = render(<Button isLoading onClick={onClickHandler}> Button </Button>);
    debug();
    expect(container.firstElementChild?.classList.contains('button-loading')).toBe(true);
    fireEvent.click(container);
    expect(onClickHandler).toBeCalledTimes(0);
  });
});