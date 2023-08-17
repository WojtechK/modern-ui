import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./Select.module.scss";
import { Input } from "../Input/Input";
import { FormItemProps, FormItem } from "../FormItem/FormItem";
import CaretDown from "../../assets/icons/CaretDown";
import CaretUp from "../../assets/icons/CaretUp";

type SelectOption = {
  id: string;
  value: string;
};

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, FormItemProps {
  isFormGroup?: boolean;
  options?: SelectOption[];
  withSearch?: boolean;
  isFullWidth?: boolean;
  hasError?: boolean;
  required?: boolean;
}

// features
//  1. search type single select from hardcoded options
//  2. search type multi select from hardcoded options
//  3. RenderOption renders single dropdown option
//  4. Asynchronous search as you type

export const Select: React.FC<SelectProps> = ({
  isFormGroup,
  options,
  withSearch = false,
  isFullWidth,
  hasError,
  required,
  disabled,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);


  const selectRef = useRef(null);

  const baseSelect = (
    <div className={styles.selectWrapper}>
      <div ref={selectRef} className={styles.select}>
        <Input
          className={styles.selectInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={disabled}
          hasError={hasError}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
        />
        <div className={styles.caretIcon}>{isOpen ? <CaretUp /> : <CaretDown />}</div>
      </div>
      {isOpen && (
        <div style={{ top: '48px' }} className={styles.optionsContainer}>
          {options?.map((option) => (
            <div className={styles.option}> {option.value} </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      {isFormGroup ? (
        <FormItem hasError={hasError} required={required} isFullWidth={isFullWidth} {...props}>
          {baseSelect}
        </FormItem>
      ) : (
        baseSelect
      )}
    </>
  );
};
