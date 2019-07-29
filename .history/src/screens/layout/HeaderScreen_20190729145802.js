import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../../public'

export class HeaderScreen extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link 
                    to="/"
                    class="navbar-brand">
                    <img src={process.env.PUBLIC_URL + '/img/logo.png'}/>
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