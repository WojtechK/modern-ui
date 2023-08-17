import React from "react";
import cn from "classnames";
import styles from "./Input.module.scss";
import { FormItem, FormItemProps } from "../FormItem/FormItem";

export type InputVariant = "outline" | "clean";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, FormItemProps {
  isFormGroup?: boolean;
  variant?: InputVariant;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
  isFullWidth?: boolean;
  hasError?: boolean;
}

export const Input: React.FC<InputProps> = ({
  isFormGroup,
  variant,
  value,
  name,
  onChange,
  onKeyUp,
  hasError,
  required,
  isFullWidth,
  className,
  ...props
}) => {
  const inputClasses = cn(
    styles.input,
    variant === "outline" && styles.outline,
    variant === "clean" && styles.clean,
    hasError && variant === "outline" && styles.error,
    hasError && variant === "clean" && styles.cleanError,
    isFullWidth && styles.fullWidth,
    className,
  );

  const baseInput = (
    <input
      className={inputClasses}
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      required={required}
      {...props}
    />
  );

  return (
    <>
      {isFormGroup ? (
        <FormItem hasError={hasError} required={required} isFullWidth={isFullWidth} {...props}>
          {baseInput}
        </FormItem>
      ) : (
        baseInput
      )}
    </>
  );
};

Input.defaultProps = {
  variant: "outline",
  isFormGroup: false,
};
