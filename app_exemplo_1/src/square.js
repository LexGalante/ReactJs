import React from 'react'

const Square = ({ backgroundColor, height, width }) => (
    <div
        style={{ backgroundColor, height, width }}
        onClick={(e) => alert(`I am ${backgroundColor}`)} />
)

export default Square