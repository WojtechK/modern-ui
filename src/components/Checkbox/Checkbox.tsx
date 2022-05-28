import React from "react";
import cn from "classnames";
import styles from "./Checkbox.module.scss";
import { Color } from "../interfaces";
import { FormItem, FormItemProps } from "../FormItem/FormItem";

type CheckboxColor = Color;

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>, FormItemProps {
  isFormGroup?: boolean;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: CheckboxColor;
  classNames?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  isFormGroup,
  checked,
  onChange,
  color,
  classNames,
  required,
  ...props
}) => {
  const classes = cn(styles.checkbox, color && styles[`checkbox-${color}`], classNames);

  const baseCheckbox = <input type="checkbox" checked={checked} onChange={onChange} {...props} />;

  return (
    <div className={classes}>
      {isFormGroup ? (
        <FormItem required={required} {...props}>
          {baseCheckbox}
        </FormItem>
      ) : (
        baseCheckbox
      )}
    </div>
  );
};

Checkbox.defaultProps = {
  isFormGroup: false,
};
