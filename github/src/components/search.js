import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ bindValue, handleText, handleSearch }) => (
    <div className="user-search">
        <input
            id="username"
            name="username"
            type="search"
            placeholder="Digite usuário"
            value={bindValue}
            onChange={handleText} />
        <button onClick={handleSearch}>Buscar</button>
    </div>
)

Search.prototype = {
    bindValue: PropTypes.string,
    handleText: PropTypes.func,
    handleSearch: PropTypes.func
}

export default Search