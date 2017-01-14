import React           from 'react';
import { OneStepLine,
         NextStepBox } from '../styles';

class OneStep extends React.Component {
    /* OneStep holds the button when only one option exists. */

    constructor(props) {
        super(props);
        this.state = {
            leftChild:  "",
            rightChild: ""
        }
    }

    componentDidRender() {
        if (Array.isArray(this.props.children) &&
            this.props.children[0]             &&
            this.props.children[1]) {

            this.setState({
                leftChild:  this.props.children[0],
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
                    <div style={NextStepBox}
                         onClick={this.props.clickFunction}
                         className="btn-black">
                        <h4>
                            {this.props.children}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default OneStep;
