import React    from 'react';
import { Link } from 'react-router';

class StepTitle extends React.Component {
    render() {
        return (
                <h1>{this.props.children}</h1>
        )
    }
}

export default StepTitle;
