import React from "react";
import cn from "classnames";
import styles from "./FormItem.module.scss";
import { Placement } from "../interfaces";

export interface FormItemProps {
  label?: string;
  name?: string;
  hasError?: boolean;
  message?: string;
  required?: boolean;
  isFullWidth?: boolean;
  labelPlacement?: Placement;
}
/**
 * FormItem component is a wrapper for form controls (inputs, checkboxes) with all the needed functionalities.
 * Use it in the implementation of UI form components to reuse labels, errors, messages etc.
 */

export const FormItem: React.FC<FormItemProps> = ({
  children,
  label,
  name,
  hasError,
  message,
  required,
  isFullWidth,
  labelPlacement,
}) => {
  return (
    <div className={cn(styles.container, isFullWidth && styles.fullWidth)}>
      <div
        className={cn(
          styles.labeledControl,
          labelPlacement && styles[`labeledControl-${labelPlacement}`]
        )}
      >
        {label && (
          <label htmlFor={name}>
            {label}
            {required && "*"}
          </label>
        )}
        <div>{children}</div>
      </div>
      {message && <p className={hasError && styles.errorMessage}>{message}</p>}
    </div>
  );
};

FormItem.defaultProps = {
  labelPlacement: "top",
};
