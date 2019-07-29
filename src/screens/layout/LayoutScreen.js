import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { HeaderScreen } from './HeaderScreen';

export class LayoutScreen extends Component {
    render() {
        return (            
            <HeaderScreen></HeaderScreen>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
      
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (LayoutScreen));