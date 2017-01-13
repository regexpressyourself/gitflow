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
import { NextStepBox } from '../styles';

class Pull extends React.Component {
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
        this.state.onNextStep("merge");
    }
    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    Git Pull
                    <Terms isCode="true" term="git pull">
                        Retrieve changes from an online source.
                    </Terms>
                </FlowHeader>
                <TermsDescription>
                    <i> Note: If you haven't set up a remote repository yet, this step likely won't apply to you.</i>
                    <br/><br/>
                    Before we combine our changes from our branch into master, we should make sure we have the most current version of master. It's important to do this before combining our changes, as it will save overwriting any changes that might have been made by someone else.
                    <br/> <br/>
                    Pulling changes will update your branch from any changes from a remote version of the branch (like one on GitHub). Pull a remote branch by running:
                    <kbd className="is-command">git pull</kbd>
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}
                                   clickFunction={this.onNextStep.bind(this)}>
                            Add my branch's changes to the master branch
                </NextStepContainer>
            </div>
        )
    }
}

export default Pull;
