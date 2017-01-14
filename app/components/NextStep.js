import React           from 'react';
import { Link }        from 'react-router';
import { NextStepBox } from '../styles';

class NextStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: "",
            buttonText: "",
            linkText: ""
        }
    }

    componentDidMount() {
        this.setState({
            link: this.props.link,
            buttonText: this.props.buttonText,
            linkText: this.props.linkText,
            onNextStep: this.props.onNextStep
            });

    }
    render() {
        return (
            <div style={NextStepBox}>
                <p>
                    {this.props.children}
                    <Link to={this.state.link}> {this.state.linkText}</Link>.
                </p>
                <Link to={this.state.link}>
                    <button onClick={this.state.onNextStep} className="btn btn-lg btn-black">{this.state.buttonText}</button>
                </Link>
            </div>
        )
    }
}
export default NextStep;
