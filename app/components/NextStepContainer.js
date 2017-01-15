import React   from 'react';
import TwoStep from './TwoStep';
import OneStep from './OneStep';

class NextStepContainer extends React.Component {
    /** NextStepContainer sets up the next step button.
    *   There are two options to the next step: 1 or 2 two steps.
    *   Two steps will be wrapped in the TwoStep component, and one step in
    *   the OneStep component
    **/

    constructor(props) {
        super(props);
        this.state = {
            isActive:  false,
            bodyText:  "",   // holds either OneStep or TwoStep component
            isTwoStep: false // One step by default
        }
    }

    componentDidMount() {

        this.setState({
            isActive:  this.props.isActive,
            isTwoStep: this.props.isTwoStep
        }, this.getBodyText.bind(this));
    }

    componentWillReceiveProps() {
        this.setState({
            isActive: this.props.isActive
        }, this.getBodyText.bind(this));
    }

    getBodyText() {
        if (!this.props.isActive) {
            this.setState({
                bodyText: ""
            });
        }
        else {
            this.getNumberOfChildren();
        }
    }

    getNumberOfChildren() {
        if (this.state.isTwoStep) {
            this.setState({
                bodyText: (
                    <TwoStep rightFunction={this.props.rightFunction}
                             leftFunction={this.props.leftFunction}>
                        {this.props.children}
                    </TwoStep>
                )
            });
        }
        else {
            this.setState({
                bodyText: (
                    <OneStep clickFunction={this.props.clickFunction}>
                        {this.props.children}
                    </OneStep>
                )
            });
        }
    }

    render() {
        return (
            <div>
                {this.state.bodyText}
            </div>
        )
    }
}

export default NextStepContainer;
