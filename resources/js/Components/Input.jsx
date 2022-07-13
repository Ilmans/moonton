import React, { useEffect, useRef } from 'react';
import '../../css/input.css';
import PropTypes from 'prop-types';


Input.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password','file','number']),
    name: PropTypes.string,
    value : PropTypes.string,
    defaultValue : PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'error', 'outline-primary']),
    autoComplete : PropTypes.string,
    required : PropTypes.bool,
    isFocus : PropTypes.bool,
    handleChange : PropTypes.func,
    placeholder : PropTypes.string,
    isError : PropTypes.bool,
}

export default function Input({
    type = 'text',
    name,
    value,
    className,
    defaultValue,
    variant = 'primary',
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                className={
                    `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && 'input-error'} input-${variant} ${className}`
                }
                defaultValue={defaultValue}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                placeholder = {placeholder}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
