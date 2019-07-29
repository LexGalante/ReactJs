import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class HomeScreen extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) {
    return {

    };
}

const mapDispatchToProps = (dispatch) {
    return {

    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));