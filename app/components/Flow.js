import React        from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';
import Start from './Start';
import Init from './Init';
import Branch from './Branch';
import Clone from './Clone';
import Work from './Work';
import Add from './Add';

class Flow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            children: this.props.children,
            lastChild: {}
        }
    }
    onNextStep(nextComponent) {
        switch (nextComponent) {
            case "init":
                this.setState({
                    init:  <Init onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "clone":
                this.setState({
                    clone:  <Clone onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "branch":
                this.setState({
                    branch:  <Branch onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "work":
                this.setState({
                    branch:  <Work onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
        }
    }
    render() {
        /* {this.state.init}
         * {this.state.clone}
         * {this.state.branch}
         * {this.state.work}*/
        return (

            <div>
                <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={600} transitionLeaveTimeout={500} >
                    <Start onNextStep={this.onNextStep.bind(this)}/>
                    <Init></Init>
                    <Clone></Clone>
                    <Branch></Branch>
                    <Work></Work>
                    <Add></Add>
                </ReactCSSTransitionGroup>
            </div>

        )
    }
}

export default Flow;
