import React, { Component } from 'react'
import Search from './components/search'
import Progress from './components/progress'
import Figure from './components/figure'
import RepoInfo from './components/repo-info'
import Repositories from './components/repositories'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            progress: false,
            username: "",
            user: null,
            progressRepos: false,
            repos: []
        }
    }

    showProgress = () => {
        if (this.state.progress) {
            return <Progress />
        }
    }

    showContent = () => {
        if (this.state.user != null) {
            return (
                <div>
                    <Figure
                        urlImage={this.state.user.avatar_url}
                        description={this.state.user.name}
                        url={this.state.user.url}
                        login={this.state.user.login} />
                    {/*{ Spread operator */}
                    <RepoInfo {...this.state} />
                    {/*{ Spread operator */}
                    <Repositories {...this.state} />
                </div>
            )
        }
    }

    handleText = (e) => {
        this.setState({
            username: e.target.value,
            user: null,
            repos: [],
        })
    }

    handleSearch = () => {
        fetch(`https://api.github.com/users/${this.state.username}`)
            .then((response) => response.json())
            .then((data) => {
                if (!("message" in data)) {
                    this.setState({
                        user: data,
                        progress: false
                    }, () => {
                        this.handleSearchRepos()
                    })
                }
                this.setState({ progress: false })
            })
            .catch((err) => console.error(err))
    }

    handleSearchRepos = () => {
        this.setState({ progressRepos: true })
        fetch(`https://api.github.com/users/${this.state.username}/repos`)
            .then((response) => response.json())
            .then((data) => {
                if (!("message" in data)) {
                    this.setState({
                        repos: data
                    }, () => this.setState({ progressRepos: false }))
                }
                this.setState({ progressRepos: false })
            })
            .catch((err) => console.error(err))
    }

    render() {
        return (
            <div className="app">
                <h1>Github App</h1>
                <Search
                    bindValue={this.state.username}
                    handleText={this.handleText}
                    handleSearch={this.handleSearch} />
                {this.showProgress()}
                {this.showContent()}
            </div>
        )
    }
}

export default App
