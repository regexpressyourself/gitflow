import React    from 'react';
import { Link } from 'react-router';

class StepTitle extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

export default StepTitle;
