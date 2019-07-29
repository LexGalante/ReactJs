import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HomeScreen extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
    log: (param) => log(dispatch, param),  
  });

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);