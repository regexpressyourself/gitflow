import React from 'react';
import {TermsDescriptionStyles} from '../styles';

class TermsDescription extends React.Component {
    render() {
        return (
            <div style={TermsDescriptionStyles}>
                <p>{this.props.children} </p>
            </div>
        )
    }

}

export default TermsDescription;
