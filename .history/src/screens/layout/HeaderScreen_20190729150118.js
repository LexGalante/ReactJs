import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

export class HeaderScreen extends Component {
    const logo = process.env.PUBLIC_URL;

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link 
                    to="/"
                    class="navbar-brand">
                    <img src={logo}></img>
                </Link>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
      
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (HeaderScreen));