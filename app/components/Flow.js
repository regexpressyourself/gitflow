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
        this.onNextStep = this.onNextStep.bind(this);
        this.state = {
            steps:             [], // string array of steps reached so far
            stepsAsComponents: [], // component array of steps reached so far
            components:        { // "associative array" of string-to-component conversions
                "push":           <Push           onNextStep={this.onNextStep}/>,
                "diff":           <Diff           onNextStep={this.onNextStep}/>,
                "remerge":        <Remerge        onNextStep={this.onNextStep}/>,
                "merge":          <Merge          onNextStep={this.onNextStep}/>,
                "pull":           <Pull           onNextStep={this.onNextStep}/>,
                "checkout":       <Checkout       onNextStep={this.onNextStep}/>,
                "checkoutmaster": <CheckoutMaster onNextStep={this.onNextStep}/>,
                "commit":         <Commit         onNextStep={this.onNextStep}/>,
                "add":            <Add            onNextStep={this.onNextStep}/>,
                "work":           <Work           onNextStep={this.onNextStep}/>,
                "branch":         <Branch         onNextStep={this.onNextStep}/>,
                "clone":          <Clone          onNextStep={this.onNextStep}/>,
                "init":           <Init           onNextStep={this.onNextStep}/>,
                "start":          <Start          onNextStep={this.onNextStep}/>
            }
        }
    }

    componentDidMount() {
        let stepsInUrl; // array of steps found listed in the url
        stepsInUrl = this.props.location.query.steps ?
                     this.props.location.query.steps.split(" ") :
                     ["start"];
        // Add any steps found in URL, or add "start" if the URL is empty

        this.setState({
            stepsAsString: stepsInUrl
        }, this.onNextStep);
    }

    onNextStep(nextStep) {
        // Update the view when a next step is passed in
        let listOfSteps = this.state.stepsAsString;

        if (nextStep === "complete") {
            // scroll back up to "git checkout" after pushing
            this.scrollToCheckoutSection();
        }
        else {
            this.addNextStep(nextStep, listOfSteps); // add step to listOfSteps
            this.updateUrl(listOfSteps.join("+"));   // add step to URL's step parameter
            this.updateView(listOfSteps);            // add step to stepsAsComponents
        }
    }

    scrollToCheckoutSection() {
        $(document).ready(function () {
            $("html, body").animate({
                scrollTop: $("#checkout-section").offset().top
            }, 500);
        });
    }

    addNextStep(nextStep, listOfSteps) {
        // Checks for duplicate steps and adds step to the listOfSteps
        if (nextStep &&
            listOfSteps.indexOf(nextStep) < 0) {
            listOfSteps.push(nextStep);
        }
    }

    updateUrl(urlStepParameter) {
        // add next step to url

        hashHistory.push({
            pathname: '/flow/',
            search:   '?steps=' + urlStepParameter
        })
    }

    updateView(listOfSteps) {
        // add next steps component to Flow's state

        let listOfComponents;

        listOfComponents = this.convertStringsToComponents(listOfSteps)
        listOfComponents = this.setLastStepActive(listOfComponents);

        this.setState({
            // update this.state.view with the new components
            stepsAsComponents: listOfComponents
        });
    }

    convertStringsToComponents(listOfSteps) {
        // converts a string array into a corresponding component array
        return listOfSteps.map((step) => {
            return React.cloneElement(this.state.components[step],
                                      {key: step});
        });
    }

    setLastStepActive(listOfComponents) {
        // sets the last component's isActive prop to true
        let lastIndex = listOfComponents.length - 1;

        if (listOfComponents[lastIndex] !== undefined){
            listOfComponents[lastIndex] = React.cloneElement(listOfComponents[lastIndex],
                                                             {isActive: true});
        }
        return listOfComponents;
    }

    render(){
        return (
            <div id="flowchart-container">
                <h1>The Git Flow Flowchart</h1>
                <hr/>
                <br/><br/>
                <ReactCSSTransitionGroup transitionName="appear" transitionEnterTimeout={600} transitionLeaveTimeout={500} >

                    {/* The stepsAsComponents state will be set each time the
                        component mounts or onNextStep is called from a child component.

                        If onNextStep is called, the next step is simple added in.
                        If the component mounts from scratch, it will look for any steps in
                        the URL, and add them to stepsAsComponents
                      */}

                    {this.state.stepsAsComponents}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Flow;
