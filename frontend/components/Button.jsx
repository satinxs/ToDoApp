import React from 'react';

export default Button = (props) => {
    const className = (props.className ?? '') + (props.tooltip ? ' tooltip' : '');

    return <button
        className={className}
        onClick={ev => {
            ev.preventDefault();
            props.onClick();
        }}
    >
        {props.children} { /* Render button's children */}
        {
            props.tooltip // Add the tooltip if needed.
                ? <span className='tooltiptext'>{props.tooltip}</span>
                : null
        }
    </button>;
};