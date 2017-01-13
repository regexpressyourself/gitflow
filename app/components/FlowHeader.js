import React        from 'react';
import { TermsBg } from '../styles';
import {StepTitleStyle} from '../styles';
import TitleContainer from './TitleContainer';

class FlowHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            terms: "",
            isViewed: false
        }
    }
    componentDidMount() {
        if (Array.isArray(this.props.children) &&
            this.props.children.length >= 2) {
            // Both a title and commadns were passed
            this.setState({
                title: this.props.children[0],
                terms: this.props.children[1],
                isViewed: this.props.isViewed
            });
        }
        else if (this.props.children.type == TitleContainer) {
            // No "Commands" section
            this.setState({
                title: this.props.children,
                isViewed: this.props.isViewed
            });
        }

    }
    render() {
        return (
        <div className="row flex">
            <div className="col-xs-6" style={StepTitleStyle}>
                {this.state.title}
            </div>

            <div className="col-xs-6" style={TermsBg}>
                {this.state.terms}
            </div>
        </div>
            )
    }
}

export default FlowHeader;
