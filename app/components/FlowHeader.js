import React        from 'react';
import { TermsBg } from '../styles';
import {StepTitleStyle} from '../styles';

class FlowHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            terms: ""
        }
    }
    componentDidRender() {
        if (Array.isArray(this.props.children) &&
            this.props.children[0]             &&
            this.props.children[1]) {

            this.setState({
                title: this.props.children[0],
                terms: this.props.children[1]
            });
        }
    }
    render() {
        return (
        <div className="row">
            <div className="col-xs-6" style={StepTitleStyle}>
                {this.props.children[0]}
            </div>

            <div className="col-xs-6" style={TermsBg}>
                {this.props.children[1]}
            </div>
        </div>
            )
    }
}

export default FlowHeader;
