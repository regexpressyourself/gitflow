import React        from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';

class Flow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Flow;
