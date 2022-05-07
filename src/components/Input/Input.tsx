import React from "react";
import cn from "classnames";
import styles from "./Input.module.scss";
import { FormItem, FormItemProps } from "../FormItem/FormItem";

export type InputVariant = "outline" | "clean";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, FormItemProps {
  isFormGroup: boolean;
  variant: InputVariant;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent) => void;
  // TO HANDLE
 // TO HANDLE
   // TO HANDLE
 // TO HANDLE
  isFullWidth?: boolean;
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
  ...props
}) => {
  const inputClasses = cn(
    styles.input,
    variant === "outline" && styles.outline,
    variant === "clean" && styles.clean,
    hasError && variant === 'outline' && styles.error,
    hasError && variant === 'clean' && styles.cleanError,
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
        <FormItem hasError={hasError} required={required} {...props}>
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
