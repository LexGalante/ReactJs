import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App() {
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
          Learn React          
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({  
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App);
