import React                 from 'react';
import { Link } from 'react-router';
import PropTypes from 'react';
import { TermsBg } from '../styles';

class TermsContainer extends React.Component {
    render(){
        return (
            <div style={TermsBg}>
            <h2>Terms</h2>
            {this.props.children}
            </div>
        )
    }
}
export default TermsContainer;
