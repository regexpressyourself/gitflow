import React               from 'react';
import { Link }            from 'react-router';
import { TwoStepBox,
         StepLine,
         ArrowLine,
         InsideArrowLine } from '../styles';

class TwoStep extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftChild:  "",
            rightChild: ""
        }
    }

    componentDidRender() {
        if (Array.isArray(this.props.children) &&
            this.props.children.length === 2 )
            {
                this.setState({
                    leftChild:     this.props.children[0],
                    rightChild:    this.props.children[1],
                    leftFunction:  this.props.leftFunction,
                    rightFunction: this.props.rightFunction
                });
            }
    }

    render() {
        return (
            <div className="row">
                <div style={StepLine}>
                </div>
                <div style={ArrowLine}>
                    <div style={InsideArrowLine}></div>
                </div>
                <div className="col-xs-6">
                    <div style={TwoStepBox}
                         className='float-right btn-black'
                         onClick={this.props.leftFunction}>
                        <h4>
                            {this.props.children[0]}
                        </h4>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div style={TwoStepBox}
                         className='float-left btn-black'
                         onClick={this.props.rightFunction}>
                        <h4>
                            {this.props.children[1]}
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default TwoStep;
