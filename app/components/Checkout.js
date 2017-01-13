import React             from 'react';
import { Link }          from 'react-router';
import Terms             from './Terms';
import TermsContainer    from './TermsContainer';
import NextStep          from './NextStep';
import StepTitle         from './StepTitle';
import TwoStep           from './TwoStep';
import OneStep           from './OneStep';
import TitleContainer    from './TitleContainer';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';
import { NextStepBox, CommandsContainer } from '../styles';

class Branch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isViewed: true
        }
        this.onNextStep = this.onNextStep.bind(this);
    }
    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep,
            isActive: this.props.isActive
        });
    }
    onNextStep() {
        this.setState({
            isActive: false
        });
        this.state.onNextStep("work");

    }
    render() {
        return (
            <div id="checkout-section">
                <FlowHeader isViewed={this.state.isViewed}>
                    Git Checkout
                    <Terms isCode="true" term="git checkout <new_branch>" >
                        Start working on the new branch
                    </Terms>
                </FlowHeader>
                <TermsDescription>
                    Now that you've made a new branch, you'll want to switch to it, or in git lingo "check it out". You can do this by running <kbd className="is-command">git checkout {"<"}new_branch{">"}</kbd>

                    Think of each branch as an independent version of your project. The master branch is typically reserved to only accept changes from other branches. By making a new branch and working in it instead, we are sure not to introduce errors into the master branch.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox} onClick={this.onNextStep} className="btn-black">
                            <h4>
                                Stop messing around with this git stuff and do some work
                            </h4>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Branch;
