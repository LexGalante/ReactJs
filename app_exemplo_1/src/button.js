import React from 'react'

const Button = ({ children, handleClick }) => (
    <button
        onClick={handleClick}
        className="main-button">
        {children}
    </button>
)

export default Button