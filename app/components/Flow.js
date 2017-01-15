import React          from 'react';
import {hashHistory}  from 'react-router';
import Start          from './Start';
import Init           from './Init';
import Branch         from './Branch';
import Clone          from './Clone';
import Work           from './Work';
import Add            from './Add';
import Commit         from './Commit';
import Push           from './Push';
import Checkout       from './Checkout';
import CheckoutMaster from './CheckoutMaster';
import Pull           from './Pull';
import Merge          from './Merge';
import Remerge        from './Remerge';
import Diff           from './Diff';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';

class Flow extends React.Component {
    /** Flow component controls the flowchart, calling each step's
    *   component when it it reached in the chart. It is the parent component
    *  of the /flow path
    **/
    constructor(props) {
        super(props);
        this.state = {
            steps: [] // the list of steps reached so far
        }
    }

    componentDidMount() {
        if (!this.props.location.query.steps) {
            // go to start if no steps have been logged in the url
            this.onNextStep("start") ;
        }
        else {
            let stepsInUrl; // array of steps found listed in the url
            stepsInUrl = this.props.location.query.steps.split(" ");

            this.setState({
                steps: stepsInUrl
            }, this.onNextStep.bind(this));
        }
    }

    onNextStep(nextComponent) {
        // Update the view when a next step is passed in

        let listOfSteps = this.state.steps;

        if (nextComponent) {
            listOfSteps.push(nextComponent);
        }

        this.updateUrl(listOfSteps.join("+"));

        this.updateView(listOfSteps);
    }

    updateUrl(urlStepParameters) {
        // add next step to url

        // TODO add check for dups
        hashHistory.push({
            pathname: '/flow/',
            search:   '?steps=' + urlStepParameters
        })
    }

    updateView(listOfSteps) {
        // add next steps component to Flow's state

        var isLastStep = false;

        for (let i = 0; i < listOfSteps.length; i++) {

            if (i === listOfSteps.length - 1) {
                // flag last step to include Next Steps section
                isLastStep = true;
            }

            switch (listOfSteps[i]) {
                    /* update appropriate view, binding the onNextStep 
                     * function from Flow to each step's component
                     */
                case "push":
                    this.setState({
                        push:  <Push isActive={isLastStep}
                                     onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "diff":
                    this.setState({
                        diff:  <Diff isActive={isLastStep}
                                     isViewed={isLastStep}
                                     onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "remerge":
                    this.setState({
                        remerge:  <Remerge isActive={isLastStep}
                                           onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "merge":
                    this.setState({
                        merge:  <Merge isActive={isLastStep}
                                       onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "pull":
                    this.setState({
                        pull:  <Pull isActive={isLastStep}
                                     onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "checkout":
                    this.setState({
                        checkout:  <Checkout isActive={isLastStep}
                                             onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "checkoutmaster":
                    this.setState({
                        checkoutmaster:  <CheckoutMaster isActive={isLastStep}
                                                         onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "commit":
                    this.setState({
                        commit:  <Commit isActive={isLastStep}
                                         onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "add":
                    this.setState({
                        add:  <Add isActive={isLastStep}
                                   onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "work":
                    this.setState({
                        work:  <Work isActive={isLastStep}
                                     onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "branch":
                    this.setState({
                        branch:  <Branch isActive={isLastStep}
                                         onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
                case "clone":
                    this.setState({
                        clone:  <Clone isActive={isLastStep}
                                       onNextStep={this.onNextStep.bind(this)}/>,
                    });
                    break;
                case "init":
                    this.setState({
                        init:  <Init isActive={isLastStep}
                                     onNextStep={this.onNextStep.bind(this)}/>,
                    });
                    break;
                case "start":
                    this.setState({
                        start: <Start isActive={isLastStep}
                                      onNextStep={this.onNextStep.bind(this)}/>
                    });
                    break;
            }
        }
    }

    render(){
        return (
            <div id="flowchart-container">
                <h1>The Git Flow Flowchart</h1>
                <hr/>
                <br/><br/>
                <ReactCSSTransitionGroup transitionName="appear"
                                         transitionEnterTimeout={600}
                                         transitionLeaveTimeout={500} >
                    {/* The state for each component will be set when the
                        component appears in the url, or is passed to the onNextStep
                        function. They appear in the same order, so we can just
                        declare them here, and set them as they come up.

                        Refactor could include a state.view element that is added
                        to, but this works for now.
                      */}
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
