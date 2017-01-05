import React          from 'react';
import { Link }       from 'react-router';
import {StepLine, ArrowLine, InsideArrowLine} from '../styles';

class TwoStep extends React.Component {
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

                <div style={StepLine}>
                </div>
                <div style={ArrowLine}>
                    <div style={InsideArrowLine}>
                    </div>
                </div>
                <div className="col-xs-6">
                    {this.props.children[0]}

                </div>
                <div className="col-xs-6">
                    {this.props.children[1]}
                </div>
            </div>
        )
    }
}
export default TwoStep;
