import React, { Component } from 'react';
import { connect } from 'react-redux';

class LayoutScreen extends Component {
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
    
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutScreen);