import React from 'react';
import styles from './FormItem.module.scss';

export interface FormItemProps {
    label?: string,
    name?: string,
    hasError?: boolean,
    message?: string,
    required?: boolean,
}
/**
 * Purpose of FormItem component is to reuse handling of form control for inputs, selects etc. 
 */

export const FormItem: React.FC<FormItemProps> = ({ children, label, name, hasError, message, required }) => {
    return (
        <div className={styles.container}>
            {label && (
                <label htmlFor={name}>
                    {label}
                    {required && "*"}
                </label>
            )}
            {children}
            {message && <p className={hasError && styles.errorMessage}>{message}</p>}
        </div>
    )
}