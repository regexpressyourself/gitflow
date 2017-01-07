import React          from 'react';
import { Link }       from 'react-router';
import {OneStepLine } from '../styles';

class OneStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftChild: "",
            rightChild: ""
        }
    }
    componentDidRender() {
        if (Array.isArray(this.props.children) &&
            this.props.children[0]             &&
            this.props.children[1]) {

            this.setState({
                leftChild: this.props.children[0],
                rightChild: this.props.children[1]
            });
        }
    }
    render() {
        return (
            <div className="row">

                <div style={OneStepLine}>
                </div>
                <div className="col-xs-12">
                    {this.props.children}

                </div>
            </div>
        )
    }
}
export default OneStep;
