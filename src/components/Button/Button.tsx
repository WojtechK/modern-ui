import React from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
import { Loader } from "../index";

type btnVariant = "text" | "outline";
type btnColor = "primary" | "secondary" | "error" | "success";
type btnSize = "small" | "large";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: btnVariant;
  color?: btnColor;
  size?: btnSize;
  children: JSX.Element | string;
  isRounded?: boolean;
  isFullWidth?: boolean;
  linkUrl?: string;
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
  linkUrl,
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
    styles[`button-${color}`],
    styles[`button-${size}`],
    styles[`button-${variant}`],
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
