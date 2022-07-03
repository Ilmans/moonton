import React from 'react';
import PropTypes from 'prop-types';
import '../../css/button.css'
Button.propTypes = {
    type : PropTypes.oneOf(['button', 'submit', 'reset']),
    className : PropTypes.string,
    processing : PropTypes.bool,
    children : PropTypes.node,
    variant : PropTypes.oneOf(['primary','warning','danger','light-outline','white-outline']),
}
export default function Button({ type = 'submit', className = '', processing, children,variant = 'primary' }) {
    return (
        <button
            type={type}
            className={`rounded-2xl btn-${variant} py-[13px] text-center ${processing && 'opacity-30'} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
