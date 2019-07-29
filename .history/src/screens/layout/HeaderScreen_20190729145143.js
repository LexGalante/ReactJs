import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

export class HeaderScreen extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <Link 
                    to="/"
                    class="navbar-brand">Portal de Soluções do Varejo</Link>
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