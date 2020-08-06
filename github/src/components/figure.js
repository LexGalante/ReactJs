import React from 'react'

const Figure = ({ urlImage, description, url, login }) => (
    <div className="user-info">
        <figure>
            <img
                src={urlImage}
                alt={description}
                width="100px"
                alt="100px" />
            <figcaption>
                <a href={url}>{login}</a>
            </figcaption>
        </figure>
    </div>
)

export default Figure