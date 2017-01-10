import React                   from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';
import Start    from './Start';
import Init     from './Init';
import Branch   from './Branch';
import Clone    from './Clone';
import Work     from './Work';
import Add      from './Add';
import Commit   from './Commit';
import Push     from './Push';
import Checkout from './Checkout';
import Pull     from './Pull';
import Merge    from './Merge';
import Diff     from './Diff';

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
                    work:  <Work onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "add":
                this.setState({
                    add:  <Add onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "commit":
                this.setState({
                    commit:  <Commit onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "push":
                this.setState({
                    push:  <Push onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "checkout":
                this.setState({
                    checkout:  <Checkout onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "pull":
                this.setState({
                    pull:  <Pull onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "merge":
                this.setState({
                    merge:  <Merge onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
            case "diff":
                this.setState({
                    diff:  <Diff onNextStep={this.onNextStep.bind(this)}/>
                });
                break;
        }
    }
    render() {
        /* {this.state.init}
         * {this.state.branch}
         * {this.state.clone}
         * {this.state.work}
         * {this.state.add}
         * {this.state.commit}
         * {this.state.push}
         * {this.state.checkout}
         * {this.state.pull}
         * {this.state.merge}
         * {this.state.diff}*/
        return (

            <div>
                <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={600} transitionLeaveTimeout={500} >
                    <Start onNextStep={this.onNextStep.bind(this)}/>
                    <Init></Init>
                    <Clone></Clone>
                    <Branch></Branch>
                    <Work></Work>
                    <Add></Add>
                    <Commit></Commit>
                </ReactCSSTransitionGroup>
            </div>

        )
    }
}

export default Flow;
