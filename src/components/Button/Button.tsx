import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
import { Loader } from "../index";
import { Color } from "../interfaces";

type btnVariant = "fill" | "text" | "outline";
type btnColor = Color;
type btnSize = "small" | "medium" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: btnVariant;
  color?: btnColor;
  size?: btnSize;
  children: JSX.Element | string;
  isRounded?: boolean;
  isFullWidth?: boolean;
  classNames?: string;
  prefixIcon?: JSX.Element | React.FunctionComponent;
  suffixIcon?: JSX.Element | React.FunctionComponent;
  iconButton?: JSX.Element | React.FunctionComponent;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  size,
  children,
  classNames,
  isRounded,
  isFullWidth,
  prefixIcon,
  suffixIcon,
  iconButton,
  isLoading,
  ...props
}) => {
  const classes = cn(
    styles.button,
    color && styles[`button-${color}`],
    size && styles[`button-${size}`],
    variant && styles[`button-${variant}`],
    isRounded && styles["button-rounded"],
    isFullWidth && styles["button-fullWidth"],
    iconButton && styles["button-icon"],
    isLoading && styles["button-loading"],
    classNames
  );

  return (
    <button {...props} className={classes}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {iconButton ?? (
            <>
              {prefixIcon}
              <span>{children}</span>
              {suffixIcon}
            </>
          )}
        </>
      )}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};
