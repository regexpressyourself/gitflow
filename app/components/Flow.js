import React                   from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {hashHistory} from 'react-router';
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
            steps: [],
            lastStep: {}
        }
    }
    componentDidMount() {
        if (this.props.location.query.step) {
            this.onNextStep(this.props.location.query.step);
        }
        else {
            this.onNextStep("start") ;
        }
    }

    onNextStep(nextComponent) {

        hashHistory.push({
            pathname: '/flow/',
            search: '?step=' + nextComponent
        })

        let isLastStep = true;
        switch (nextComponent) {
            case "diff":
                this.setState({
                    diff:  <Diff isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "merge":
                this.setState({
                    merge:  <Merge isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "pull":
                this.setState({
                    pull:  <Pull isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "checkout":
                this.setState({
                    checkout:  <Checkout isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "push":
                this.setState({
                    push:  <Push isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "commit":
                this.setState({
                    commit:  <Commit isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "add":
                this.setState({
                    add:  <Add isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "work":
                this.setState({
                    work:  <Work isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "branch":
                this.setState({
                    branch:  <Branch isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "clone":
                this.setState({
                    clone:  <Clone isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>,
                    start: <Start isActive={false} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
                break;
            case "init":
                this.setState({
                    init:  <Init isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
            case "start":
                this.setState({
                    start: <Start isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                });
                isLastStep = false;
        }
    }

    render(){


        {/* <Start onNextStep={this.onNextStep.bind(this)}/>
            <Init></Init>
            <Clone></Clone>
            <Branch></Branch>
            <Work></Work>
            <Add></Add>
            <Commit></Commit>
            <Push></Push>
            <Checkout></Checkout>
            <Merge></Merge>
            <Diff></Diff> */}
        return (

            <div>
            <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={600} transitionLeaveTimeout={500} >

            {this.state.start}
            {this.state.init}
            {this.state.clone}
            {this.state.branch}
            {this.state.work}
            {this.state.add}
            {this.state.commit}
            {this.state.push}
            {this.state.checkout}
            {this.state.pull}
            {this.state.merge}
            {this.state.diff}
                </ReactCSSTransitionGroup>
            </div>

        )
    }
}

export default Flow;
