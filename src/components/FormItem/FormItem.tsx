import React from "react";
import cn from "classnames";
import styles from "./FormItem.module.scss";

export interface FormItemProps {
  label?: string;
  name?: string;
  hasError?: boolean;
  message?: string;
  required?: boolean;
  isFullWidth?: boolean;
}
/**
 * FormItem component is a wrapper for form controls with all the needed functionalities.
 * Use it inside UI form components to reuse labels, errors, messages etc.
 */

export const FormItem: React.FC<FormItemProps> = ({
  children,
  label,
  name,
  hasError,
  message,
  required,
  isFullWidth,
}) => {
  return (
    <div className={cn(styles.container, isFullWidth && styles.fullWidth)}>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && "*"}
        </label>
      )}
      {children}
      {message && <p className={hasError && styles.errorMessage}>{message}</p>}
    </div>
  );
};
