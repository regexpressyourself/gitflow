import React    from 'react';
import { Link } from 'react-router';
import {StepTitleStyle} from '../styles';

class StepTitle extends React.Component {
    render() {
        return (
            <div style={StepTitleStyle}>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

export default StepTitle;
