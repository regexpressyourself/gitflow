import React    from 'react';
import { Link } from 'react-router';

class StepTitle extends React.Component {
    render() {
        return (
                <h2>{this.props.children}</h2>
        )
    }
}

export default StepTitle;
