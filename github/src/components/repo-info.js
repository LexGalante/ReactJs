import React from 'react'

const RepoInfo = ({ public_repos, following, followers }) => (
    <ul className="repo-info">
        <li>Repositórios: {public_repos}</li>
        <li>Seguidores: {following}</li>
        <li>Seguindo: {followers}</li>
    </ul>
)

export default RepoInfo