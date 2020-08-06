import React from 'react'

const Step = ({ color, number, text }) => (
    <div>
        <hr />
        <strong style={{ color }}>{`${number}) Exemplo de componente React ${text}`}</strong>
        <br />
    </div>
)

export default Step