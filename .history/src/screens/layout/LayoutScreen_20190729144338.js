import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class LayoutScreen extends Component {
    render() {
        return (
            <div>
                <h4>Layout</h4>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
      
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (LayoutScreen));