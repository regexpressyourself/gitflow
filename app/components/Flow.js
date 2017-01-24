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
     *  component when it it reached in the chart. It is the parent component
     *  of the /flow path, and controls the bulk of functionality in the app.
     **/
    constructor(props) {
        super(props);
        this.onNextStep = this.onNextStep.bind(this);
        this.state = {
            steps:                [], // string array of steps reached so far
            stepsAsComponents:    [], // component array of steps reached so far
            stepConversionObject: { // "associative array" of string-to-component conversions
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
        /* onNextStep gets passed down to each step's component by reference.
         *
         * Before it is passed down, "this" is bound to the flow component.
         *
         * It will be called by the children components, but will run from the
         * flow component here.
         *
         * @param  The next step as a string, passed up from child component
         * @return none, but flow component's state and view will be updated
         */
        let listOfSteps = this.state.stepsAsString; // get the current steps from url

        if (nextStep === "complete") {
            // scroll back up to "git checkout" if the child returns "complete"
            this.scrollToCheckoutSection();
        }
        else {
            this.addNextStep(nextStep, listOfSteps); // add step to listOfSteps
            this.updateUrl(listOfSteps.join("+"));   // add step to URL's step parameter
            this.updateView(listOfSteps);            // add step to stepsAsComponents
        }
    }

    scrollToCheckoutSection() {
        /* Scroll back up to the checkout section*/

        $(document).ready(function () {
            $("html, body").animate({
                scrollTop: $("#checkout-section").offset().top
            }, 500);
        });
    }

    addNextStep(nextStep, listOfSteps) {
        /* Check for duplicates in the listOfSteps, and
         * add the next step if it hasn't been reached yet
         */
        if (nextStep &&
            listOfSteps.indexOf(nextStep) < 0) {
            listOfSteps.push(nextStep);
        }
    }

    updateUrl(urlStepParameter) {
        /* Add the next step's string to the steps parameter in the URL
         */
        hashHistory.push({
            pathname: '/flow/',
            search:   '?steps=' + urlStepParameter
        })
    }

    updateView(listOfSteps) {
        /* Convert list of steps as string to their corresponding components
         * and add the list of components to this.state.stepsAsComponents.
         */
        let listOfComponents; // workable list of components

        listOfComponents = this.convertStringsToComponents(listOfSteps)
        listOfComponents = this.setLastStepActive(listOfComponents);

        this.setState({
            // update this.state.stepsAsComponents with the new components
            stepsAsComponents: listOfComponents
        });
    }

    convertStringsToComponents(listOfSteps) {
        /* Convert the array of strings to an array of components
         * using the object this.state.stepConversionObject.
           this.state.stepConversionObject acts as an associative array,
           with the key being the step as a string, and the value being
           the corresponding component.
         */

        return listOfSteps.map((step) => {
            return React.cloneElement(this.state.stepConversionObject[step],
                                      {key: step});
        });
    }

    setLastStepActive(listOfComponents) {
        /* Set the last step as active. This will tell it to show
         * the next step options.
         */
        let lastIndex = listOfComponents.length - 1;

        if (listOfComponents[lastIndex] !== undefined){
            listOfComponents[lastIndex] = React.cloneElement(listOfComponents[lastIndex],
                                                             {isActive: true});
        }
        return listOfComponents;
    }

    render(){
        /* The render method will display whatever is in this.state.sepsAsComponents/

           The stepsAsComponents state will be set each time the
           component mounts or onNextStep is called from a child component.
         */
        return (
            <div id="flowchart-container">
                <h1>The Git Flow Flowchart</h1>
                <hr/>
                <br/><br/>
                <ReactCSSTransitionGroup transitionName="appear"
                                         transitionEnterTimeout={600}
                                         transitionLeaveTimeout={500} >
                    {this.state.stepsAsComponents}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Flow;
