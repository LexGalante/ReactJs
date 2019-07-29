import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { log } from './actions/UtilAction';

export class App extends Component {
  componentWillMount() {
    this.props.log('Teste');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Teste <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"         
          >          
            Testar Conexão Redux         
          </a>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = {
  log,  
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
