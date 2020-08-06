import React from 'react'

const Repositories = ({ progressRepos, repos }) => {
    if (progressRepos) {
        return (
            <h3>Buscando os dados de repositorios</h3>
        )
    }

    return (
        <div className="user-repos">
            <h3>Repositórios</h3>
            {repos.map((repository) => (
                <li key={repository.id}>
                    <a href={repository.url}>{repository.full_name} - {repository.html_url}</a>
                    <p><small>{repository.description}</small></p>
                </li>)
            )}
        </div>
    )
}

export default Repositories