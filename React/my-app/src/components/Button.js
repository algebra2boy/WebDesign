import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn-large'];

// make a class with many properties
export const Button = (
    { children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }) => {
    // check if the passed argument has buttonStyle that STYLES array has, if not, then
    // default to btn--primary 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(SIZES) ? SIZES: SIZES[0];

    return (
        <Link to='/sign-up' className = 'btn-mobile'>
            <button 
            // customize the button
            className = {`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onClick}
            type = {type}>
            {children}
            </button>
        </Link>
    )
};