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
                    <TitleContainer>
                        <StepTitle>Git Pull</StepTitle>
                    </TitleContainer>
                    <TermsContainer>
                        <Terms isCode="true" term="git pull">
                            Retrieve changes from an online source.
                        </Terms>
                    </TermsContainer>
                </FlowHeader>
                <TermsDescription>
                    Before we combine our changes from our branch into master, we should make sure we have the most current version of master. This is not the only workable way to use git, but it has saved me the most headache. 
                    <br/> <br/>
                    Pulling changes will update your branch from any changes from a remote (cloud hosted) version of the branch. It's important to do before combining our changes, as it will save you overwriting any changes that might have been made by someone else.
                    <br/> <br/>
                    Pulling is very easy when everyone has followed this workflow, simply run <kbd>git pull</kbd>. The changes will be downloaded automatically.
                    <br/> <br/>
                    If you get a message saying there is no remote repository, you will just need to set up your repository with one on Github. The instructions are on Github's site. Note: this is not necessary. Git will work just fine without a remote repository.
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}>
                    <OneStep>
                        <div style={NextStepBox}>
                            <p>
                                Once you've updated master, it's time to add in our changes.
                            </p>
                            <button onClick={this.onNextStep} className="btn btn-lg btn-black">Merging Branches</button>
                        </div>

                    </OneStep>
                </NextStepContainer>
            </div>
        )
    }
}

export default Pull;
