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
import CheckoutMaster from './CheckoutMaster';
import Pull     from './Pull';
import Merge    from './Merge';
import Remerge from './Remerge';
import Diff    from './Diff';

class Flow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [],
            lastStep: {}
        }
    }
    componentDidMount() {
        if (!this.props.location.query.steps) {
            this.onNextStep("start") ;
        }
        else {
            this.setState({
                steps: this.props.location.query.steps.split(" ")
            }, function() {
                this.onNextStep();
            });
        }
    }

    onNextStep(nextComponent) {

        let listOfSteps = this.state.steps;

        if (nextComponent) {
            listOfSteps.push(nextComponent);
        }

        this.updateUrl(listOfSteps.join("+"));

        this.updateView(listOfSteps);
    }

    updateUrl(urlStepParameters) {

        // TODO add check for dups
        hashHistory.push({
            pathname: '/flow/',
            search: '?steps=' + urlStepParameters
        })
    }

    updateView(listOfSteps) {

        var isLastStep = false;

        for (let i = 0; i < listOfSteps.length; i++) {


            if (i === listOfSteps.length - 1) {
                isLastStep = true;
            }

            switch (listOfSteps[i]) {
                case "push":
                    this.setState({
                        push:  <Push isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "diff":
                    this.setState({
                        diff:  <Diff isActive={isLastStep} isViewed={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "remerge":
                    this.setState({
                        remerge:  <Remerge isActive={isLastStep}  onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "merge":
                    this.setState({
                        merge:  <Merge isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "pull":
                    this.setState({
                        pull:  <Pull isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "checkout":
                    this.setState({
                        checkout:  <Checkout isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "checkoutmaster":
                    this.setState({
                        checkoutmaster:  <CheckoutMaster isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "commit":
                    this.setState({
                        commit:  <Commit isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "add":
                    this.setState({
                        add:  <Add isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "work":
                    this.setState({
                        work:  <Work isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "branch":
                    this.setState({
                        branch:  <Branch isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "clone":
                    this.setState({
                        clone:  <Clone isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>,
                    });
                    break;
                case "init":
                    this.setState({
                        init:  <Init isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>,
                    });
                    break;
                case "start":
                    this.setState({
                        start: <Start isActive={isLastStep} onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
            }
        }
    }

    render(){
        return (
            <div>
                <h1>The Git Flow Flowchart</h1>
                <hr/>
                <br/><br/>
                <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={600} transitionLeaveTimeout={500} >
                    {this.state.start}
                    {this.state.init}
                    {this.state.clone}
                    {this.state.branch}
                    {this.state.checkout}
                    {this.state.work}
                    {this.state.add}
                    {this.state.commit}
                    {this.state.checkoutmaster}
                    {this.state.pull}
                    {this.state.merge}
                    {this.state.diff}
                    {this.state.remerge}
                    {this.state.push}
                </ReactCSSTransitionGroup>
            </div>

        )
    }
}

export default Flow;
